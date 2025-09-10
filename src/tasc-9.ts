//! Задача 9
//? Завдання:
//* 1. Створіть інтерфейс Container, що містить:
//* масив items однакового типу для зберігання елементів.
//* метод addItem, який додає елемент до контейнера.
//* метод getItem, який повертає елемент за індексом.
//* 2.  Створіть два контейнери:
//* numberContainer, який містить числа та використовує відповідну типізацію.
//* stringContainer, який містить рядки та також використовує відповідну типізацію.
//* 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.
//* 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.
//* 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).
//* Примітка:
//* Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T | undefined;
}

class NumberContainer implements Container<number> {
  items: number[] = [];
  addItem(item: number): void {
    this.items.push(item);
  }
  getItem(index: number): number | undefined {
    return this.items[index];
  }
}

class StringContainer implements Container<string> {
  items: string[] = [];
  addItem(item: string): void {
    this.items.push(item);
  }
  getItem(index: number): string | undefined {
    return this.items[index];
  }
}
const numberContainer = new NumberContainer();
numberContainer.addItem(10);
numberContainer.addItem(20);
console.log(numberContainer.getItem(0));
console.log(numberContainer.getItem(1));

const stringContainer = new StringContainer();
stringContainer.addItem("Hello");
stringContainer.addItem("World");
console.log(stringContainer.getItem(0));
console.log(stringContainer.getItem(1));
function getLastElement<T>(container: Container<T>): T | undefined {
  return container.items[container.items.length - 1];
}
