import { useContext } from 'react'; //Para recuperar o valor de um contexto
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
	const contextData = useContext(AuthContext);

	return contextData;
}
