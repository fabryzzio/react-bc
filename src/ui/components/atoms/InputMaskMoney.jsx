



import React, { useState } from 'react';
import InputMask from 'react-input-mask';

export const InputMaskMoney = ( { locale = 'es-AR', minimumFractionDigits = 1, maximumFractionDigits=10 }) => {

  const [amount, setAmount] = useState('');
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const format = formatter.format(1000000000).replace(/\d/g, '9').replace(/\./g, '.');
  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    
    
    <InputMask
        mask={format}
        maskChar={null}
        placeholder={formatter.format(0)}
        value={amount}
        onChange={handleChange}/>
  );
}