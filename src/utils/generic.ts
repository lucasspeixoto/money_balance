export const formatDate = (date: string): string => {
	const newDate = new Date(date);

	const day = newDate.getDate().toString().padStart(2, '0');
	const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
	const year = newDate.getFullYear();

  const dateFormatted = `${day}/${month}/${year}`

	return dateFormatted;
};

export const formatCurrency = (current: number): string => {
	return current.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
};
