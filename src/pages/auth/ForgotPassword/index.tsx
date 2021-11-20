import React from 'react';

import logoImg from '../../../assets/logo.svg';
import { Button } from '../../../components/Button';

import { Container, Form, FormTitle, Logo } from './styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Messages } from '../../../utils/messages';
import Input from '../../../components/Input';

import { Link } from 'react-router-dom';
import { GoSignIn } from 'react-icons/go';

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
		formState: { errors, isDirty, isValid },
	} = useForm<TForgotPasswordForm>({
		resolver: yupResolver(schema),
	});

	const forgotPasswordHandler = (data: TForgotPasswordForm) => {
		console.log(isDirty, isValid);
	};

	return (
		<Container>
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
				<Button background='#258FB0' type='submit' label='Recuperar'></Button>
				<Link to='/' className='link'>
					<GoSignIn />
					Login
				</Link>
			</Form>
		</Container>
	);
};
