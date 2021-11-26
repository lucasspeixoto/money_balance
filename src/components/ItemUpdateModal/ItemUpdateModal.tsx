import { Dispatch, SetStateAction } from 'react';

import ReactModal from 'react-modal';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IData } from '../../pages/interfaces/IData.model';
import { IUpdateItemForm } from '../../pages/registration/NewItem';
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
	const {
		register,
		formState: { errors },
	} = useForm<IUpdateItemForm>({
		resolver: yupResolver(schema),
	});

	function handleCloseModal() {
		alert('cancel');

		setState(false);
	}

	async function handleConfirm() {
		await callback();
		setState(false);
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
							/>
						</FieldContainer>

						{errors.date && (
							<p className='error-message'>{errors.date?.message}</p>
						)}
					</Date>
					<Frequency>
						<FieldContainer>
							<label id='frequency'>Frequência</label>
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
							<label id='description'>Descrição</label>
							<textarea
								className='form-field'
								rows={5}
								placeholder='Descreva um pouco sobre este item...'
								{...register('description')}
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
