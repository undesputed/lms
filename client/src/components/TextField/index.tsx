import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

interface CustomTextFieldProps {
  label?: string;
  type?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'success'
    | 'info'
    | 'black';
  margin?: 'dense' | 'small' | 'normal';
  required?: boolean;
  error?: boolean;
  errorMessage: string;
  children?: ReactNode;
  onChange?: (value: string) => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default CustomTextField;
