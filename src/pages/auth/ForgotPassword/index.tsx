import React, { useState } from 'react';

import logoImg from '../../../assets/logo.png';
import { Button } from '../../../components/Button';

import { Container, Form, FormTitle, Logo } from './styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../../components/Input';

import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

import toast, { Toaster } from 'react-hot-toast';
import { Messages } from './../../../utils/messages';

interface TForgotPasswordForm {
	email: string;
}

const schema = yup
	.object({
		email: yup
			.string()
			.required(Messages.required)
			.matches(
				/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/,
				Messages.invalidemail,
			),
	})
	.required();

export const ForgotPassword: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TForgotPasswordForm>({
		resolver: yupResolver(schema),
	});

	const { sendPasswordResetEmail } = useAuth();
	const [isLoading, setIsLoading] = useState(false);

	async function forgotPasswordHandler(data: TForgotPasswordForm) {
		setIsLoading(true);
		await sendPasswordResetEmail(data.email);
		setIsLoading(false);
		toast.error('Altere sua senha no e-mail que foi enviado para sua caixa!', {
			style: { background: '#258FB0', color: '#fff' },
			duration: 2000,
		});
	}

	return (
		<Container>
			<Toaster position='top-center' reverseOrder={false} />
			<Logo>
				<img src={logoImg} alt='Controle Financeiro' />
				<h2>Controle Financeiro</h2>
			</Logo>

			<Form onSubmit={handleSubmit(forgotPasswordHandler)}>
				<FormTitle>Recuperar Senha</FormTitle>

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
				<Button
					disabled={isLoading}
					background='#258FB0'
					type='submit'
					label='Recuperar'
				></Button>
				<p className='registration'>
					<Link to='/' className='link'>
						Login
					</Link>
				</p>
			</Form>
		</Container>
	);
};
