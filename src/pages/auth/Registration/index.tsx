import React, { useState } from 'react';

import logoImg from '../../../assets/logo.png';
import { Button } from '../../../components/Button';

import { Container, Form, FormTitle, Logo } from './styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Messages } from '../../../utils/messages';

import Input from '../../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { IRegistrationForm } from '../../interfaces/IRegistration.model';
import { useAuth } from '../../../hooks/useAuth';

const schema = yup
	.object({
		name: yup.string().trim().required(Messages.required).min(5, Messages.min),
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

export const Registration: React.FC = () => {
	const { createUserWithEmailAndPassword } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegistrationForm>({
		resolver: yupResolver(schema),
	});

	function registrationHandler(data: IRegistrationForm) {
		const { name, email, password } = data;
		setIsLoading(true);
		createUserWithEmailAndPassword(name, email, password);

		setIsLoading(false);
		navigate('/');
	}

	return (
		<Container>
			<Logo>
				<img src={logoImg} alt='Controle Financeiro' />
				<h2>Controle Financeiro</h2>
			</Logo>

			<Form onSubmit={handleSubmit(registrationHandler)}>
				<FormTitle>Cadastro</FormTitle>

				<Input
					{...register('name')}
					type='text'
					id='name'
					placeholder='Nome de Usuário'
					label='Nome de Usuário'
				/>
				{errors.name && <p className='error-message'>{errors.name?.message}</p>}

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
				<p className='registration'>
					<Link to='/' className='link'>
						Login
					</Link>
				</p>
			</Form>
		</Container>
	);
};
