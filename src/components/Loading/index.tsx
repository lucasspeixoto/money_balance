import { Dot, LoadingWrapper } from './styles';

export const Loading = () => {
	return (
		<LoadingWrapper>
			<h3>Carregando </h3>
			<Dot delay='0s' />
			<Dot delay='.1s' />
			<Dot delay='.2s' />
		</LoadingWrapper>
	);
};
