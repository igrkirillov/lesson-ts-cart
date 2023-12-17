import Cart from "../Cart";
import Book from "../Book";

describe('Cart module', () => {
  test ('test add book', () => {
    const book1 = new Book(1, "Отцы и дети", 950.90);
    const book2 = new Book(2, "Преступление и наказание", 150.50);
    const cart = new Cart();
    cart.addItem(book1);
    cart.addItem(book2);
    expect(cart.getAll()).toEqual([book1, book2]);
  });
  test ('test empty', () => {
    const cart = new Cart();
    expect(cart.getAll()).toEqual([]);
  });
  test ('test remove item by id', () => {
    const book1 = new Book(1, "Отцы и дети", 950.90);
    const book2 = new Book(2, "Преступление и наказание", 150.50);
    const cart = new Cart();
    cart.addItem(book1);
    cart.addItem(book2);
    cart.removeItemById(1);
    expect(cart.getAll()).toEqual([book2]);
  });
  test ('test calc total cost', () => {
    const book1 = new Book(1, "Отцы и дети", 950.90);
    const book2 = new Book(2, "Преступление и наказание", 150.50);
    const cart = new Cart();
    cart.addItem(book1);
    cart.addItem(book2);
    expect(cart.calcTotalCost()).toBeCloseTo(1101.40);
  });
  test ('test calc total cost with discount', () => {
    const book1 = new Book(1, "Отцы и дети", 950.90);
    const book2 = new Book(2, "Преступление и наказание", 150.50);
    const cart = new Cart();
    cart.addItem(book1);
    cart.addItem(book2);
    expect(cart.calcTotalCostWithDiscount(0.50)).toBeCloseTo(550.70);
  });
})