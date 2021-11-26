import { Dispatch, SetStateAction } from 'react';

import ReactModal from 'react-modal';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Description } from '../../pages/registration/NewItem/styles';
import { Messages } from '../../utils/messages';
import { ContentHeader } from '../ContentHeader';
import {
	Container,
	Amount,
	ButtonsContainer,
	Date,
	FieldContainer,
	Form,
	Frequency,
	Title,
	Type,
} from './styles';
import { Button } from '../Button';

import { IData } from '../../pages/interfaces/IData.model';

interface IItemUpdateModalProps {
	itemData?: IData | undefined;
	title: string;
	state: boolean;
	callback: () => any;
	setState: Dispatch<SetStateAction<boolean>>;
}

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

ReactModal.setAppElement('body');

export const ItemUpdateModal: React.FC<IItemUpdateModalProps> = ({
	title,
	callback,
	state,
	setState,
	itemData,
}) => {
	const itemPreloadedValues = {
		title: itemData?.title,
		type: itemData?.type,
		date: itemData?.date,
		frequency: itemData?.frequency,
		amount: itemData?.amount,
		description: itemData?.description,
	};

	const {
		register,
		reset,
		formState: { errors },
		setValue,
	} = useForm({
		defaultValues: itemPreloadedValues,
		resolver: yupResolver(schema),
	});

	setValue('title', itemData?.title);
	setValue('type', itemData?.type);
	setValue('date', itemData?.date);
	setValue('frequency', itemData?.frequency);
	setValue('amount', itemData?.amount);
	setValue('description', itemData?.description);

	function handleCloseModal() {
		alert('cancel');

		setState(false);

		reset();
	}

	async function handleConfirm() {
		await callback();
		setState(false);
		reset();
	}

	return (
		<ReactModal
			className='modal'
			isOpen={state}
			onRequestClose={handleCloseModal}
			style={{
				overlay: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 9999,
					backgroundColor: 'rgba(5, 2, 6, 0.8)',
				},
				content: {
					width: '40vw',
					height: 'auto',
					borderRadius: '8px',
					border: '2px solid #000',
					outline: 'none',
				},
			}}
		>
			<Container>
				<ContentHeader title={title} lineColor='#258FB0' />
				<Form>
					<Title>
						<FieldContainer>
							<label id='title'>Titulo</label>
							<input
								className='form-field'
								type='text'
								placeholder='Titulo'
								{...register('title')}
								name='title'
							/>
						</FieldContainer>
						{errors.title && (
							<p className='error-message'>{errors.title?.message}</p>
						)}
					</Title>
					<Type>
						<FieldContainer>
							<label id='type'>Tipo</label>
							<select className='form-field' {...register('type')} name='type'>
								<option value='entry' label='Entrada'></option>
								<option value='exit' label='Saída'></option>
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
								name='date'
							/>
						</FieldContainer>

						{errors.date && (
							<p className='error-message'>{errors.date?.message}</p>
						)}
					</Date>
					<Frequency>
						<FieldContainer>
							<label id='frequency'>Frequência</label>
							<select
								className='form-field'
								{...register('frequency')}
								name='frequency'
							>
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
								min='1'
								max='1000000'
								placeholder='R$ Valor'
								{...register('amount')}
								name='amount'
							/>
						</FieldContainer>
						{errors.amount && (
							<p className='error-message'>{errors.amount?.message}</p>
						)}
					</Amount>
					<Description>
						<FieldContainer>
							<label id='description'>Descrição</label>
							<textarea
								className='form-field'
								rows={5}
								placeholder='Descreva um pouco sobre este item...'
								{...register('description')}
								name='description'
							></textarea>
						</FieldContainer>
					</Description>
					<ButtonsContainer>
						<Button
							onClick={handleConfirm}
							disabled={false}
							background='#AC1530'
							type='button'
							label='Excluir'
						></Button>
						<Button
							onClick={handleCloseModal}
							disabled={false}
							background='#A9AC15'
							type='button'
							label='Atualizar'
						></Button>
					</ButtonsContainer>
				</Form>
			</Container>
		</ReactModal>
	);
};
