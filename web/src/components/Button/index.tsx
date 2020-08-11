import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  colorStyle?: string;
}

const StyledButton = styled.button<ButtonProps>``;

// eslint-disable-next-line react/prop-types
const Button: React.FC<ButtonProps> = ({ colorStyle }) => {
  return <StyledButton colorStyle={colorStyle} />;
};

export default Button;
