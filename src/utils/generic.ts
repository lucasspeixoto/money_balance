export const formatDate = (date: string): string => {
	const newDate = new Date(date);

	const day = (newDate.getDate() + 1).toString().padStart(2, '0');
	const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
	const year = newDate.getFullYear();

	const dateFormatted = `${day}/${month}/${year}`;

	return dateFormatted;
};

export const formatCurrency = (current: number): string => {
	return current.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
};

export const filterByYearAndMonth = (
	date: string,
	selectedYear: string,
	selectedMonth: string,
) => {
	const newDate = new Date(date);

	const month = String(newDate.getMonth() + 1);
	const year = String(newDate.getFullYear());

	return year === selectedYear && month === selectedMonth;
};
