import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import HeaderWrapper, { Logo } from './styles';

import logoImage from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  const { title, handleToggleTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <a href="/">
        <Logo src={logoImage} alt="Hobbynize" />
      </a>
    </HeaderWrapper>
  );
};

export default Header;
