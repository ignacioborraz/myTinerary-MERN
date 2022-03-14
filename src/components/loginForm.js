import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'

export default function LoginForm() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
      <CssTextField label="e-mail" id="email" />
    </Box>
  )
}

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'rgb(33, 159, 148)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'rgb(242, 245, 200)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(33, 159, 148)',
    },
  },
});