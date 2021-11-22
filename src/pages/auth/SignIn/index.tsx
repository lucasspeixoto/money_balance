import React, { useState } from 'react';

import logoImg from '../../../assets/logo.svg';
import { Button } from '../../../components/Button';

import { Container, Form, FormTitle, Logo } from './styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Messages } from '../../../utils/messages';
import Input from '../../../components/Input';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { ILoginData } from '../../interfaces/ILogin.model';
import { Error } from '../../../utils/errors.messages';
import toast, { Toaster } from 'react-hot-toast';

type ErrorMessage = {
	code: string;
	message: string;
	a?: any;
};

const schema = yup
	.object({
		email: yup
			.string()
			.required(Messages.required)
			.matches(
				/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/,
				Messages.invalidemail,
			),
		password: yup
			.string()
			.trim()
			.required(Messages.required)
			.min(5, Messages.min),
	})
	.required();

export const SignIn: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginData>({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();
	const { user, signInWithGoogle, signInWithEmailAndPassword } = useAuth();
	const [isLoading, setIsLoading] = useState(false);

	function loginWithEmailAndPassword(data: ILoginData) {
		setIsLoading(true);
		const { email, password } = data;
		const result = signInWithEmailAndPassword(email, password);

		result
			.then(value => {
				if (value.user) {
					navigate('/dashboard');
					setIsLoading(false);
				}
			})
			.catch((error: ErrorMessage) => {
				setIsLoading(false);
				const code: string = error.code;
				toast.error(Error[code], {
					style: { background: '#258FB0', color: '#fff' },
					duration: 2000,
				});
			});
	}

	function loginWithGoogle() {
		setIsLoading(true);
		if (!user) {
			signInWithGoogle();
			navigate('/dashboard');
			setIsLoading(false);
		}
	}

	return (
		<Container>
			<Toaster position='top-center' reverseOrder={false} />
			<Logo>
				<img src={logoImg} alt='Controle Financeiro' />
				<h2>Controle Financeiro</h2>
			</Logo>

			<Form onSubmit={handleSubmit(loginWithEmailAndPassword)}>
				<FormTitle>Entrar</FormTitle>

				<Input
					{...register('email')}
					type='text'
					id='email'
					placeholder='E-mail'
					label='E-mail'
				/>
				{errors.email && (
					<p className='error-message'>{errors.email?.message}</p>
				)}

				<Input
					{...register('password', { required: true })}
					type='password'
					id='password'
					placeholder='Senha'
					label='Senha'
				/>
				{errors.password && (
					<p className='error-message'>{errors.password?.message}</p>
				)}
				<Button
					disabled={isLoading}
					background='#258FB0'
					type='submit'
					label='Entrar'
				></Button>
				<Button
					disabled={isLoading}
					onClick={loginWithGoogle}
					background='#9e1717'
					type='button'
					label='Login com o Google'
				></Button>

				<p className='registration'>
					Não está cadastrado ?{' '}
					<Link to='/registration' className='link'>
						Clique aqui!
					</Link>
				</p>
				<span className='forgot'>
					<Link to='/forgot-password' className='link'>
						Esquece a senha?
					</Link>
				</span>
			</Form>
		</Container>
	);
};
