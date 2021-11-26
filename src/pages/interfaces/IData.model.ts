export interface IData {
	id?: string | any;
	title: string;
	type: string;

	amount: number;
	frequency: string;
	date: string;
	description: string;

	amountFormatted: string;
	dateFormatted: string;
	tagColor: string;
}
