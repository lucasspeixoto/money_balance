import React, { useState } from 'react';
import { ContentHeader } from '../../../components/ContentHeader';

import {
	Amount,
	Container,
	Description,
	Frequency,
	Title,
	Type,
	Date,
	Form,
	FieldContainer,
	ButtonsContainer,
} from './styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Messages } from '../../../utils/messages';
import { Button } from '../../../components/Button';
import { useAuth } from '../../../hooks/useAuth';

import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { useExpensesGains } from '../../../hooks/useExpensesGains';

const schema = yup
	.object({
		title: yup.string().required(Messages.required),
		type: yup.string().required(Messages.required),
		date: yup.string().required(Messages.required).min(10, Messages.min),
		frequency: yup.string().required(Messages.required),
		amount: yup
			.number()
			.typeError(Messages.required)
			.min(1, Messages.number)
			.required(Messages.required),
		description: yup.string().notRequired(),
	})
	.required();

export interface IUpdateItemForm {
	title: string;
	type: string;
	date: string;
	frequency: string;
	amount: number;
	description: string;
}

export const NewItem: React.FC = ({ children }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUpdateItemForm>({
		resolver: yupResolver(schema),
	});

	const [isLoading, setIsLoading] = useState(false);

	const { user } = useAuth();

	const { addItem, updateItemsList } = useExpensesGains();

	async function newItemHandler(data: IUpdateItemForm) {
		if (user) {
			await addItem(data);

			setIsLoading(false);
			toast.success('Item adicionado!', {
				style: { background: '#4E41F0', color: '#fff' },
				duration: 3000,
			});
			updateItemsList();
		}
	}

	return (
		<Container>
			<Toaster position='top-right' reverseOrder={false}>
				{t => (
					<ToastBar
						toast={t}
						style={{
							...t.style,
							animation: t.visible
								? 'custom-enter 1s ease'
								: 'custom-exit 1s ease',
						}}
					/>
				)}
			</Toaster>
			<ContentHeader title='Incluir Item' lineColor='#258FB0'>
				{children}
			</ContentHeader>
			<Form>
				<Title>
					<FieldContainer>
						<label id='title'>Titulo</label>
						<input
							className='form-field'
							type='text'
							id='title'
							placeholder='Titulo'
							{...register('title')}
						/>
					</FieldContainer>
					{errors.title && (
						<p className='error-message'>{errors.title?.message}</p>
					)}
				</Title>
				<Type>
					<FieldContainer>
						<label id='type'>Tipo</label>
						<select className='form-field' {...register('type')}>
							<option value='entry' label='Entrada'></option>
							<option value='exit' label='Sa??da'></option>
						</select>
					</FieldContainer>

					{errors.type && (
						<p className='error-message'>{errors.type?.message}</p>
					)}
				</Type>
				<Date>
					<FieldContainer>
						<label id='date'>Data</label>
						<input
							className='form-field'
							{...register('date')}
							type='date'
							id='date'
							placeholder='Data'
						/>
					</FieldContainer>

					{errors.date && (
						<p className='error-message'>{errors.date?.message}</p>
					)}
				</Date>
				<Frequency>
					<FieldContainer>
						<label id='frequency'>Frequ??ncia</label>
						<select className='form-field' {...register('frequency')}>
							<option value='recurring' label='Recorrente'></option>
							<option value='eventual' label='Eventual'></option>
						</select>
					</FieldContainer>

					{errors.frequency && (
						<p className='error-message'>{errors.frequency?.message}</p>
					)}
				</Frequency>
				<Amount>
					<FieldContainer>
						<label id='amount'>Valor (R$)</label>
						<input
							className='form-field'
							type='number'
							id='amount'
							min='1'
							max='1000000'
							placeholder='R$ Valor'
							{...register('amount')}
						/>
					</FieldContainer>
					{errors.amount && (
						<p className='error-message'>{errors.amount?.message}</p>
					)}
				</Amount>
				<Description>
					<FieldContainer>
						<label id='description'>Descri????o</label>
						<textarea
							className='form-field'
							rows={5}
							placeholder='Descreva um pouco sobre este item...'
							{...register('description')}
						></textarea>
					</FieldContainer>
				</Description>
			</Form>
			<ButtonsContainer>
				<Button
					onClick={handleSubmit(newItemHandler)}
					disabled={isLoading}
					background='#258FB0'
					type='button'
					label='Cadastrar'
				></Button>
			</ButtonsContainer>
		</Container>
	);
};
