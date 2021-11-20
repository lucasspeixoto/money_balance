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

interface TLoginForm {
	email: string;
	password: string;
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
		formState: { errors, isDirty, isValid },
	} = useForm<TLoginForm>({
		resolver: yupResolver(schema),
	});

	const loginHandler = (data: TLoginForm) => {
		console.log(isDirty, isValid);
	};

	return (
		<Container>
			<Logo>
				<img src={logoImg} alt='Controle Financeiro' />
				<h2>Controle Financeiro</h2>
			</Logo>

			<Form onSubmit={handleSubmit(loginHandler)}>
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
				<Button background='#258FB0' type='submit' label='Entrar'></Button>
				<Button
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
