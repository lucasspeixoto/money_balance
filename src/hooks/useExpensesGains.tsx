import { useContext } from 'react';
import {
	ExpensesGainsContextType,
	ExpensesGainsContext,
} from '../contexts/ExpensesGainsContext';

export function useExpensesGains(): ExpensesGainsContextType {
	const contextData = useContext(ExpensesGainsContext);

	return contextData;
}
