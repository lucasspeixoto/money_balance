//* React
import React, { useMemo, useState, useCallback } from 'react';

//* Styled Components
import { Container, Content } from './styles';

// * Componentes
import { ContentHeader } from '../../../components/ContentHeader';
import { SelectInput } from '../../../components/SelectInput';
import { WalletBox } from '../../../components/WalletBox';
import { MessageBox } from '../../../components/MessageBox';
import { BalanceChart } from '../../../components/BalanceChart';
import { HistoryChart } from '../../../components/HistoryChart';
import { TypesChart } from '../../../components/TypesChart';

//* Utils
import { listOfMonths, months, years } from '../../../utils/constants';
import {
	actualMonth,
	actualYear,
	getDayMonthAndYearByDate,
} from '../../../utils/generic';

// * Assets
import happyImg from '../../../assets/happy.svg';
import sadImg from '../../../assets/sad.svg';
import grinningImg from '../../../assets/grinning.svg';
import ueImg from '../../../assets/ue.svg';

// * Interfaces/Models/Types
import { IMessageBoxProps } from '../../interfaces/IMessageBoxProps.model';
import { useExpensesGains } from '../../../hooks/useExpensesGains';

export const Dashboard: React.FC = () => {
	const [month, setMonth] = useState<number>(actualMonth);
	const [year, setYear] = useState<number>(actualYear);

	const { expenses, gains } = useExpensesGains();

	const totalExpenses = useMemo(() => {
		let total: number = 0;
		if (expenses) {
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
		}

		return total;
	}, [expenses, month, year]);

	const totalGains = useMemo(() => {
		let total: number = 0;
		if (gains) {
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
		}

		return total;
	}, [gains, month, year]);

	const totalBalance = useMemo(() => {
		return totalGains - totalExpenses;
	}, [totalExpenses, totalGains]);

	/* const months = useMemo(() => {
		return listOfMonths.map((month, index) => {
			return { value: index + 1, label: month };
		});
	}, []); */

	/* 	const years = useMemo(() => {
		let uniqueYears: number[] = [];

		if (expenses && gains) {
			[...gains, ...expenses].forEach((item: any) => {
				if (item) {
					const date = new Date(item.date);
					const year = date.getFullYear();
					if (!uniqueYears.includes(year)) {
						uniqueYears.push(year);
					}
				}
			});
		}

		return uniqueYears
			.sort((first, second) => first - second)
			.map(year => {
				return {
					label: year,
					value: year,
				};
			});
	}, [gains, expenses]); */

	const message: IMessageBoxProps = useMemo(() => {
		if (totalBalance > 0) {
			return {
				title: 'Muito Bem!',
				description: 'Seu saldo neste m??s esta positivo!',
				footerText:
					'Continue assim. Avalie bem como trabalhar com esse dinheiro',
				icon: happyImg,
			};
		} else if (totalGains === 0 && totalExpenses === 0) {
			return {
				title: 'U??!',
				description: 'Neste m??s, n??o h?? registros de entradas ou sa??das.',
				footerText:
					'Parece que voc?? n??o fez nenhum registro no m??s e ano selecionado.',
				icon: ueImg,
			};
		} else if (totalBalance === 0) {
			return {
				title: 'Ufaa!',
				description: 'Neste m??s, voc?? gastou exatamente o que ganhou.',
				footerText: 'Tenha cuidado. No pr??ximo tente poupar o seu dinheiro.',
				icon: grinningImg,
			};
		} else {
			return {
				title: 'Deu Ruim!',
				description: 'Seu saldo neste m??s esta negativo!',
				footerText:
					'Avalia suas despesas para conseguir um saldo positivo no pr??ximo m??s',
				icon: sadImg,
			};
		}
	}, [totalBalance, totalExpenses, totalGains]);

	const balanceData = useMemo(() => {
		const total = totalGains + totalExpenses;

		const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));
		const percentGains = Number(((totalGains / total) * 100).toFixed(1));

		const balance = [
			{
				name: 'Entradas',
				value: totalGains,
				percent: percentGains ? percentGains : 0,
				color: '#187D5F',
			},
			{
				name: 'Sa??das',
				value: totalExpenses,
				percent: percentExpenses ? percentExpenses : 0,
				color: '#CC2A2C',
			},
		];

		return balance;
	}, [totalGains, totalExpenses]);

	const historyData = useMemo(() => {
		return listOfMonths
			.map((_, month) => {
				//* Entradas
				let amountEntry = 0;
				if (gains) {
					gains.forEach(gain => {
						const date = new Date(gain.date);
						const gainMonth = date.getMonth();
						const gainYear = date.getFullYear();

						if (gainMonth === month && gainYear === year) {
							try {
								amountEntry += Number(gain.amount);
							} catch {
								throw new Error(
									'amountEntry is invalid. amountEntry must be a number',
								);
							}
						}
					});
				}

				//* Sa??das
				let amountOutput = 0;
				if (expenses) {
					expenses.forEach(gain => {
						const date = new Date(gain.date);
						const expenseMonth = date.getMonth();
						const expenseYear = date.getFullYear();

						if (expenseMonth === month && expenseYear === year) {
							try {
								amountOutput += Number(gain.amount);
							} catch {
								throw new Error(
									'amountOutput is invalid. amountOutput must be a number',
								);
							}
						}
					});
				}

				return {
					monthNumber: month,
					month: listOfMonths[month].substring(0, 3),
					amountEntry,
					amountOutput,
				};
			})
			.filter(item => {
				const currentMonth = new Date().getMonth();
				const currentYear = new Date().getFullYear();

				return (
					(item.monthNumber <= currentMonth && year === currentYear) ||
					year < currentYear
				);
			});
	}, [expenses, gains, year]);

	const expensesTypesData = useMemo(() => {
		let amountRecurrent = 0;
		let amountEventual = 0;

		if (expenses) {
			expenses
				.filter(expense => {
					const date = new Date(expense.date);
					const expenseYear = date.getFullYear();
					const expenseMonth = date.getMonth() + 1;

					return expenseMonth === month && expenseYear === year;
				})
				.forEach(expense => {
					if (expense.frequency === 'recurring') {
						return (amountRecurrent += Number(expense.amount));
					}
					if (expense.frequency === 'eventual') {
						return (amountEventual += Number(expense.amount));
					}
				});
		}

		const total = amountRecurrent + amountEventual;

		const percentRecurrent = Number(
			((amountRecurrent / total) * 100).toFixed(1),
		);
		const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

		return [
			{
				name: 'Recorrentes',
				amount: amountRecurrent,
				percent: percentRecurrent ? percentRecurrent : 0,
				color: '#4E41F0',
			},
			{
				name: 'Eventuais',
				amount: amountEventual,
				percent: percentEventual ? percentEventual : 0,
				color: '#D0CB4B',
			},
		];
	}, [expenses, month, year]);

	const gainsTypesData = useMemo(() => {
		let amountRecurrent = 0;
		let amountEventual = 0;

		if (gains) {
			gains
				.filter(expense => {
					const date = new Date(expense.date);
					const gainsYear = date.getFullYear();
					const gainsMonth = date.getMonth() + 1;

					return gainsMonth === month && gainsYear === year;
				})
				.forEach(gains => {
					if (gains.frequency === 'recurring') {
						return (amountRecurrent += Number(gains.amount));
					}
					if (gains.frequency === 'eventual') {
						return (amountEventual += Number(gains.amount));
					}
				});
		}

		const total = amountRecurrent + amountEventual;

		const percentRecurrent = Number(
			((amountRecurrent / total) * 100).toFixed(1),
		);
		const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

		return [
			{
				name: 'Recorrentes',
				amount: amountRecurrent,
				percent: percentRecurrent ? percentRecurrent : 0,
				color: '#4E41F0',
			},
			{
				name: 'Eventuais',
				amount: amountEventual,
				percent: percentEventual ? percentEventual : 0,
				color: '#D0CB4B',
			},
		];
	}, [gains, month, year]);

	const handleSelectedMonth = useCallback((month: string) => {
		try {
			const parseMonth = Number(month);
			setMonth(parseMonth);
			localStorage.setItem('@money_balance:month', String(parseMonth));
		} catch {
			throw new Error('invalid month value');
		}
	}, []);

	const handleSelectedYear = useCallback((year: string) => {
		try {
			const parseYear = Number(year);
			setYear(parseYear);
			localStorage.setItem('@money_balance:year', String(parseYear));
		} catch {
			throw new Error('invalid year value');
		}
	}, []);

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
					footerLabel='atualizado com base nas entradas e sa??das'
					icon='dolar'
					color='#C97800'
				/>
				<WalletBox
					title='Entradas'
					color='#187D5F'
					amount={totalGains}
					footerLabel={`total de entradas em ${listOfMonths[
						month - 1
					].toLowerCase()} de ${year}`}
					icon='arrow-up'
				/>

				<WalletBox
					title='Sa??das'
					color='#CC2A2C'
					amount={totalExpenses}
					footerLabel={`total de sa??das em ${listOfMonths[
						month - 1
					].toLowerCase()} de ${year}`}
					icon='arrow-down'
				/>
				<MessageBox
					title={message.title}
					description={message.description}
					footerText={message.footerText}
					icon={message.icon}
				/>
				<BalanceChart balance={balanceData} />

				<HistoryChart
					history={historyData}
					lineColorAmountEntry='#187D5F'
					lineColorAmountOutput='#CC2A2C'
					year={year}
				/>

				<TypesChart types={expensesTypesData} title='Sa??das' />

				<TypesChart types={gainsTypesData} title='Entradas' />
			</Content>
		</Container>
	);
};
