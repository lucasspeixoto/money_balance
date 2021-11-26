import { createContext, useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

import { firebase, firestore } from '../services/firebase';

export interface ExpensesGainsContextType {
	isLoading: boolean;
	gains: IItem[] | undefined;
	expenses: IItem[] | undefined;
	addItem: (data: IItem) => Promise<firebase.firestore.DocumentData>;
	deleteItem: (id: string) => Promise<void>;
  updateItem: (data: IItem, id: string) => Promise<void>;
	expensesAndGainsListener: () => Promise<void>;
	updateItemsList: () => void;
}

export interface IItem {
	id?: string;
	title: string;
	date: string;
	frequency: string;
	type: string;
	amount: number;
	description: string;
}

export const ExpensesGainsContext = createContext(
	{} as ExpensesGainsContextType,
);

export const ExpensesGainsContextProvider: React.FC = ({ children }) => {
	const [gains, setGains] = useState<IItem[]>();
	const [expenses, setExpenses] = useState<IItem[]>();
	const [initUpdate, setInitUpdate] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { user } = useAuth();

	//* Observar se houve alteração no estado de autenticação do usuário
	useEffect(() => {
		setInitUpdate(false);
		async function expensesAndGainsHandler() {
			setIsLoading(true);
			let itemsGains: IItem[] = [];
			let itemsExpenses: IItem[] = [];

			if (user) {
				const getResult = await firestore
					.collection('users')
					.doc(`/${user?.id}`)
					.collection('items')
					.get();

				getResult.forEach(doc => {
					let item: IItem | any = {
						id: doc.id,
						...doc.data(),
					};
					if (item.type === 'entry') {
						itemsGains.push(item);
					} else {
						itemsExpenses.push(item);
					}
				});

				setGains(itemsGains);

				setExpenses(itemsExpenses);

				setIsLoading(false);
			}
		}

		expensesAndGainsHandler();
	}, [user, initUpdate]);

	function updateItemsList() {
		setInitUpdate(true);
	}

	async function expensesAndGainsListener() {
		let itemsGains: IItem[] = [];
		let itemsExpenses: IItem[] = [];

		if (user) {
			const listenResult = await firestore
				.collection('users')
				.doc(`/${user?.id}`)
				.collection('items');

			listenResult.onSnapshot(value => {
				value.forEach(doc => {
					const item: IItem | any = doc.data();
					if (item.type === 'entry') {
						itemsGains.push(item);
					} else {
						itemsExpenses.push(item);
					}
				});
			});
			setGains(itemsGains);

			setExpenses(itemsExpenses);
		}
	}

	async function addItem(data: IItem) {
		setIsLoading(true);
		const result = await firestore
			.collection(`users/${user?.id}/items`)
			.add({ ...data });

		return result;
	}

	async function deleteItem(id: string) {
		setIsLoading(true);
		await firestore.doc(`users/${user?.id}/items/${id}`).delete();
	}

	async function updateItem(data: IItem, id: string) {
		setIsLoading(true);
		await firestore.doc(`users/${user?.id}/items/${id}`).update(data);
	}

	return (
		<ExpensesGainsContext.Provider
			value={{
				isLoading,
				gains,
				expenses,
				addItem,
				deleteItem,
        updateItem,
				expensesAndGainsListener,
				updateItemsList,
			}}
		>
			{children}
		</ExpensesGainsContext.Provider>
	);
};
