import { createContext, useState, useEffect } from 'react';
import { User } from '../pages/interfaces/IUser.model';

import { auth as fireauth, firebase, firestore } from '../services/firebase';

type AuthContextType = {
	isLogged: boolean;
	isLoading: boolean;
	user: User | undefined;
	signInWithGoogle: () => Promise<void>;
	signInWithEmailAndPassword: (
		email: string,
		password: string,
	) => Promise<firebase.auth.UserCredential>;
	createUserWithEmailAndPassword: (
		name: string,
		email: string,
		password: string,
	) => Promise<void>;
	sendPasswordResetEmail: (email: string) => Promise<void>;
	logout: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User>();
	const [isLogged, setIsLogged] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	async function setUserData(uid: string) {
		const result = firestore.collection('users');
		const data = await result.get();

		data.docs.forEach(item => {
			const loggedUser = item.data().auth;

			if (loggedUser.id === uid) {
				setUser(loggedUser);
				setIsLogged(true);
				setIsLoading(false);
			}
		});
	}

	//* Observar se houve alteração no estado de autenticação do usuário
	useEffect(() => {
		setIsLoading(true);
		const unsubscribe = fireauth.onAuthStateChanged(loggedUser => {
			if (loggedUser) {
				const { uid } = loggedUser;
				setUserData(uid);
			}
			else {
				setIsLoading(false);
			}
		});
		return () => {
			unsubscribe();
		};
	}, [isLogged]);

	async function registerUser(loggedUser: User) {
		if (loggedUser) {
			const url = `users/${loggedUser.id}`;
			const authRef = firestore.doc(url);
			const addAuth = { auth: { ...loggedUser } };
			await authRef.set(addAuth, { merge: true });
		}
	}

	async function signInWithGoogle() {

		const provider = new firebase.auth.GoogleAuthProvider();

		const result = await fireauth.signInWithPopup(provider);

		if (result.user) {
			const { displayName, email, photoURL, uid } = result.user;

			const loggedUser: User = {
				id: uid,
				name: displayName,
				email: email,
				avatar: photoURL,
			};

			setUser(loggedUser);
			setIsLogged(true);
			registerUser(loggedUser);
		}
	}

	async function signInWithEmailAndPassword(email: string, password: string) {
    setIsLoading(true);
		const result = await fireauth.signInWithEmailAndPassword(email, password);
		return result;
	}

	async function createUserWithEmailAndPassword(
		name: string,
		email: string,
		password: string,
	) {
    setIsLoading(true);
		const result = await fireauth.createUserWithEmailAndPassword(
			email,
			password,
		);

		if (result.user) {
			result.user.sendEmailVerification();
			const { email, uid } = result.user;

			const loggedUser: User = {
				id: uid,
				name: name,
				email: email,
				avatar: '',
			};

			setUser(loggedUser);
			setIsLogged(true);
			registerUser(loggedUser);
		}
	}

	async function sendPasswordResetEmail(email: string) {
		return await fireauth.sendPasswordResetEmail(email);
	}

	async function logout() {
		setIsLogged(false);
		setUser(undefined);
		await fireauth.signOut();
	}

	return (
		<AuthContext.Provider
			value={{
				isLogged,
				isLoading,
				user,
				signInWithGoogle,
				signInWithEmailAndPassword,
				createUserWithEmailAndPassword,
				sendPasswordResetEmail,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
