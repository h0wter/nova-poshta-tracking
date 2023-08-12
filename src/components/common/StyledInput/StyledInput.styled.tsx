import { styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)({
  '& .MuiFilledInput-input, label, label.Mui-focused': {
    color: '#f5f5f5'
  },
  '& .MuiInput-underline': {
    borderBottomColor: '#B2BAC2'
  },
  '& .MuiFilledInput-root:after': {
    borderColor: '#f5f5f5'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7'
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C'
    }
  }
});
