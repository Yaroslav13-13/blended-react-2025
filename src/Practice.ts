//! 1️⃣ Типи в TypeScript

let myName: string = "John";
let myAge: number = 30;
let isStudent: boolean = false;

//! ___________________________________________________________________________________________________
//! 2️⃣ Масиви
const fruits: string[] = ["apple", "banana", "cherry"];

//! ___________________________________________________________________________________________________
//! 3️⃣ Об’єкти та типи

type Settings = {
  darkMode: boolean;
  fontSize: number;
  language: string;
};

const settings: Settings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};

//! ___________________________________________________________________________________________________
//! 4️⃣ Union types

let status: "success" | "error";
status = "success";
status = "error";

//! ___________________________________________________________________________________________________
//! 5️⃣ Функції та типи

function convertCurrency(params: {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}): void {
  console.log(`Converting ${params.amount} to ${params.currency}`);
}

//! ___________________________________________________________________________________________________
//! 6️⃣ Деструктуризація параметрів (опціонально)

function convertCurrencyDestructured({
  amount,
  currency,
}: {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}): void {
  console.log(`Converting ${amount} to ${currency}`);
}

//! ___________________________________________________________________________________________________
//! 7️⃣ Типи для функцій, що повертають об’єкти

const Settings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};

function convertCurrency(amount: number, currency: string): void {
  console.log(`Converting ${amount} to ${currency}`);
}

let status: "success" | "error";
const fruits: string[] = ["apple", "banana", "cherry"];
