import React, { useMemo } from 'react';
import Toggle from '../Toggle'
import emojis from '../../utils/emojis'

import { Container, Profile, Welcome, UserName } from './styles';

export const MainHeader: React.FC = () => {

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index]
  },[])

	return (
		<Container>
			<Toggle/>
			<Profile>
				<Welcome>Olá, {emoji} </Welcome>
				<UserName>Lucas Peixoto</UserName>
			</Profile>
		</Container>
	);
};

export default MainHeader;
