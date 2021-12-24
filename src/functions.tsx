import React from 'react';

function orderTotal(total: number, tax: number): number {
    return total + tax;
}

// Add types to a constant function 

const cartTotal: string(amountSpent: string, numberOfItems: string): string => `${amountSpent} + ${numberOfItems}`;

// Union types

export const creditCards = (creditCardNumber: number, expirationDate: string | number): string => `${creditCardNumber} ${expirationDate}`

// Void types

export const creditCardsUsed = (creditCardNumber: number, expirationDate: string | number): void => 
console.log(creditCardNumber, expirationDate);

// Promises

export const fetchCreditCardData = (url: string): Promise<string> => Promise.resolve('data from `${url}`);

// Rest parameters

const welcomeMessage(Welcome: string, ...names: string[]): string {
    return `${Welcome} ${names.join("")}`
}