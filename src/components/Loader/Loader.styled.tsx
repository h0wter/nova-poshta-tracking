import { styled, keyframes, css } from '@mui/material';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled('div')`
  display: flex;
  height: 100%;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledLoader = styled('div')(
  ({ theme }) => css`
    width: 60px;
    height: 60px;
    border: 4px solid ${theme.palette.primary.main};
    border-top: 4px solid transparent;
    border-radius: 50%;
    animation: ${rotateAnimation} 1.2s infinite linear;
  `
);
