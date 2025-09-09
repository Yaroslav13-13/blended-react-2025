//! Задача 2
//* Опис: Є функція, яка приймає суму (число) та тип валюти.
//? Завдання:
//* Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
//* Типізуйте повернення функції.

type Currency = "USD" | "EUR" | "UAH";

function convertCurrency(params: { amount: number; currency: Currency }): void {
  const { amount, currency } = params;
  console.log(`Converting ${amount} to ${currency}`);
}
