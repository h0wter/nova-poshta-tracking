import { TextFieldProps } from '@mui/material';
import { StyledTextField } from './StyledInput.styled';

export const StyledInput: React.FC<TextFieldProps> = ({
  variant = 'filled',
  ...props
}) => {
  return <StyledTextField variant={variant} {...props} />;
};
