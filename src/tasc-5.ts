//! Задача 5
//? Завдання:
//* Типізуйте функцію повністю: параметри і повернення функції.

type CreateUserParams = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

function createUser(params: CreateUserParams): User {
  const { name, age, isAdmin = false } = params;
  return {
    name,
    age,
    isAdmin,
  };
}

// console.log(createUser({ name: "Alice", age: 30 }));
// console.log(createUser({ name: "Bob", age: 25, isAdmin: true }));
