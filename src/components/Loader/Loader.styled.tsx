import { styled, keyframes } from "@mui/material";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledLoader = styled("div")`
  width: 60px;
  height: 60px;
  border: 4px solid var(--color-blue-200);
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: ${rotateAnimation} 1.2s infinite linear;
`;
