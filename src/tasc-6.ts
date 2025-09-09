//! Задача 6
//? Завдання:
//* Створіть тип для user.
//* Зробіть address необов’язковим.
//* Перевірте, що user.address?.city не викликає помилки.

type User = {
  name: string;
  address?: {
    city: string;
  };
};

const user = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};
console.log(user.address?.city);
