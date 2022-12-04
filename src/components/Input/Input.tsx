import React from 'react';
import { FormStyled, InputStyled, ClearButtonStyled, CrossOne, CrossTwo } from './InputStyled';

const Input: React.FC = () => (
  <FormStyled>
    <InputStyled
      placeholder='Type in city name...' 
      type="text" 
      id="city" 
      name="city"
    />
    <ClearButtonStyled type="reset">
      <CrossOne />
      <CrossTwo />
    </ClearButtonStyled>
  </FormStyled>
)

export default Input