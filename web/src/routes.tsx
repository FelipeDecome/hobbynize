import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Hobbies from './pages/Hobbies';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route path="/hobbies/:category" component={Hobbies} />
    </BrowserRouter>
  );
};
export default Routes;
