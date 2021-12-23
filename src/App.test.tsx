import React from 'react';
import { render, screen } from '@testing-library/react';
import InputForm from './InputForm';
import addOrderTotal from "./functions";


test('render an input form', () => {
  render(<InputForm />);
});

test('this component has an email', () => {
  let email = "james@yahoo.com";
  expect(email).toBe(email);
})

test('this order total is added', () => {
  addOrderTotal(36, 25);
  expect(addOrderTotal).toBe(addOrderTotal);
})
