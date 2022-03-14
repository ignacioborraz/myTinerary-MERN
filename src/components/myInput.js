import * as React from 'react';
import {styled} from '@mui/material/styles';

function InputText(name,placeholder,label) {
  return (
    <fieldset>
      <label for={name}>{label}</label>
      <input type='text' id={name} name={name} placeholder={placeholder} />
    </fieldset>
  );
}

const MyInput = styled(InputText('email','email'))(
  {
  '& label.Mui-focused': {color: 'red'},
  '& .MuiInput-underline:after': {borderBottomColor: 'rgb(33, 159, 148)'},
  '& .MuiOutlinedInput-root': {
      '& fieldset': {borderColor: 'black'},
      '&:hover fieldset': {borderColor: 'rgb(242, 245, 200)'},
      '&.Mui-focused fieldset': {borderColor: 'rgb(33, 159, 148)'},
    },
  }
)

//LABEL MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled css-1sumxir-MuiFormLabel-root-MuiInputLabel-root
//DIV MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-adornedEnd css-jd0i0-MuiInputBase-root-MuiOutlinedInput-root
// INPUT MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input