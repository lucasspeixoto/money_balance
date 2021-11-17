export const formatDate = (date: string): string => {
	const newDate = new Date(date);

	const day = (newDate.getDate() + 1).toString().padStart(2, '0');
	const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
	const year = newDate.getFullYear();

	const dateFormatted = `${day}/${month}/${year}`;

	return dateFormatted;
};

export const getDayMonthAndYearByDate = (date: string): number[] => {
	const itemDate = new Date(date);
	const day = itemDate.getDate() + 1;
	const year = itemDate.getFullYear();
	const month = itemDate.getMonth() + 1;

	return [day, month, year];
};

export const formatCurrency = (current: number): string => {
	return current.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
};

export const filterItems = (
	date: string,
	selectedYear: number,
	selectedMonth: number,
	frequency: string,
	selectedFrequency: string[],
) => {
	const newDate = new Date(date);

	const month = newDate.getMonth() + 1;
	const year = newDate.getFullYear();

	return (
		year === selectedYear &&
		month === selectedMonth &&
		selectedFrequency.includes(frequency)
	);
};

export const actualDay = new Date().getDate() + 1;

export const actualMonth = new Date().getMonth() + 1;

export const actualYear = new Date().getFullYear();
