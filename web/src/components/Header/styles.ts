import styled from 'styled-components';

import colors from '../../assets/styles/colors';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 1.2rem 2.4rem;
  background: ${({ theme }) => theme.colors.headerBackground};
  transition: all 0.2s;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.3rem;
    background: ${colors.linearGradient};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    padding: 2rem 3.6rem;
  }
`;

export const Logo = styled.img`
  height: 2.4rem;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 3.6rem;
  }
`;

export default HeaderWrapper;
