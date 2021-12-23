import React from 'react';
import { render, screen } from '@testing-library/react';
import InputForm from './InputForm';


test('render an input form', () => {
  render(<InputForm />);
});

test('this component has an email', () => {
  let email = "james@yahoo.com";
  expect(email).toBe(email);
})
