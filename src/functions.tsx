import React from 'react';

function addOrderTotal(total:number, tax:number): number {
    return total + tax;
}


export default addOrderTotal;

// Const function typing

export const addedStrings = (str1: string, str2: string): string => `${str1} + ${str2}`;

// Union function typing

export const creditCards = (creditCardnumber: string, expirationDate: string | number): string => `${creditCardnumber} ${expirationDate}`; 

// Void function typing 
export const printCreditCards = (creditCardnumber: string, expirationDate: string | number): void => 
console.log(creditCardnumber, expirationDate);

// Promise function typing

export const fetchCreditCard = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

// Rest parameter typing 

function welcomeMessage(welcome: string, ...names: string[]): string {
    return `${welcome} ${names.join(" ")}`;
}

