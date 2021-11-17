//* React
import React, { useMemo, useState } from 'react';

//* Styled Components
import { Container, Content } from './styles';

// * Componentes
import { ContentHeader } from '../../components/ContentHeader';
import { SelectInput } from '../../components/SelectInput/';
import { WalletBox } from '../../components/WalletBox';
import { MessageBox } from '../../components/MessageBox';

// * Repositório
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

//* Utils
import { listOfMonths } from '../../utils/constants';
import {
	actualMonth,
	actualYear,
	getDayMonthAndYearByDate,
} from '../../utils/generic';

// * Assets
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

// * Interfaces/Models/Types
import { IMessageBoxProps } from '../interfaces/IMessageBoxProps.model';

export const Dashboard: React.FC = () => {
	const [month, setMonth] = useState<number>(actualMonth);
	const [year, setYear] = useState<number>(actualYear);

	const totalExpenses = useMemo(() => {
		let total: number = 0;
		expenses.forEach(item => {
			const [, itemMonth, itemYear] = getDayMonthAndYearByDate(item.date);

			if (itemMonth === month && itemYear === year) {
				try {
					total += Number(item.amount);
				} catch (err) {
					throw new Error('invalid year value. Amount must be number.');
				}
			}
		});

		return total;
	}, [month, year]);

	const totalGains = useMemo(() => {
		let total: number = 0;
		gains.forEach(item => {
			const [, itemMonth, itemYear] = getDayMonthAndYearByDate(item.date);

			if (itemMonth === month && itemYear === year) {
				try {
					total += Number(item.amount);
				} catch (err) {
					throw new Error('invalid year value. Amount must be number.');
				}
			}
		});

		return total;
	}, [month, year]);

	const totalBalance = useMemo(() => {
		return totalGains - totalExpenses;
	}, [totalExpenses, totalGains]);

	const months = useMemo(() => {
		return listOfMonths.map((month, index) => {
			return { value: index + 1, label: month };
		});
	}, []);

	const years = useMemo(() => {
		let uniqueYears: number[] = [];

		[...gains, ...expenses].forEach(item => {
			const date = new Date(item.date);
			const year = date.getFullYear();
			if (!uniqueYears.includes(year)) {
				uniqueYears.push(year);
			}
		});

		return uniqueYears.map(year => {
			return {
				label: year,
				value: year,
			};
		});
	}, []);

	const message: IMessageBoxProps = useMemo(() => {
		return totalBalance >= 0
			? {
					title: 'Muito Bem!',
					description: 'Seu saldo neste mês esta positivo!',
					footerText:
						'Continue assim. Avalie bem como trabalhar com esse dinheiro',
					icon: happyImg,
			  }
			: {
					title: 'Deu Ruim!',
					description: 'Seu saldo neste mês esta negativo!',
					footerText:
						'Avalia suas despesas para conseguir um saldo positivo no próximo mês',
					icon: sadImg,
			  };
	}, [totalBalance]);

	const handleSelectedMonth = (month: string) => {
		try {
			const parseMonth = Number(month);
			setMonth(parseMonth);
		} catch (err) {
			throw new Error('invalid month value');
		}
	};

	const handleSelectedYear = (year: string) => {
		try {
			const parseYear = Number(year);
			setYear(parseYear);
		} catch (err) {
			throw new Error('invalid year value');
		}
	};

	return (
		<Container>
			<ContentHeader title='Dashboard' lineColor='#258FB0'>
				<SelectInput
					options={months}
					onChange={event => handleSelectedMonth(event.target.value)}
					defaultValue={month}
				/>
				<SelectInput
					options={years}
					onChange={event => handleSelectedYear(event.target.value)}
					defaultValue={year}
				/>
			</ContentHeader>

			<Content>
				<WalletBox
					title='Saldo'
					amount={totalBalance}
					footerLabel='atualizado com base nas entradas e saídas'
					icon='dolar'
					color='#C97800'
				/>
				<WalletBox
					title='Entradas'
					color='#187D5F'
					amount={totalGains}
					footerLabel='última movimentação em 16/11/2021 às 17h40'
					icon='arrow-up'
				/>

				<WalletBox
					title='Saídas'
					color='#CC2A2C'
					amount={totalExpenses}
					footerLabel='última movimentação em 15/11/2021 às 12h40'
					icon='arrow-down'
				/>
				<MessageBox
					title={message.title}
					description={message.description}
					footerText={message.footerText}
					icon={message.icon}
				/>
			</Content>
		</Container>
	);
};
