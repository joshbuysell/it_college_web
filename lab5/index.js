import { Product } from "./models/Product.js";
import { User } from "./models/User.js";
import { Customer } from "./models/Customer.js";
import { Order } from "./models/Order.js";

import { Person } from "./models/Person.js";
import { Course } from "./models/Course.js";
import { Teacher } from "./models/Teacher.js";
import { Student } from "./models/Student.js";

// Варіант 2: Онлайн-магазин
console.log("=== Варіант 2: Онлайн-магазин ===");

const laptop = new Product("Ноутбук Lenovo", 28000, "Електроніка");
const mouse = new Product("Бездротова миша Logitech", 850, "Аксесуари");
const headphones = new Product("Навушники Sony", 3200, "Аудіо");

console.log(laptop.getInfo());
console.log(mouse.getInfo());
console.log(headphones.getInfo());

const customer = new Customer("Олександр Шевченко", "shevchenko@gmail.com");
console.log(customer.getInfo());

const order1 = new Order(101, [laptop, mouse]);
const order2 = new Order(102, [headphones]);

customer.addOrder(order1);
customer.addOrder(order2);

console.log("\nСписок замовлень покупця:");
console.log(customer.viewOrders());


// Варіант 1: Система управління курсами
console.log("\n=== Варіант 1: Система управління курсами ===");

const teacher = new Teacher("Оксана Петрівна", 42);
const jsCourse = new Course("Web-програмування");
const dbCourse = new Course("Бази даних");

teacher.addCourse(jsCourse);
teacher.addCourse(dbCourse);
console.log(teacher.getInfo());

const student1 = new Student("Віктор Цвик", 19);
const student2 = new Student("Андрій Коваль", 20);

student1.enrollCourse(jsCourse);
student1.enrollCourse(dbCourse);
student2.enrollCourse(jsCourse);

console.log(student1.getInfo());
console.log(student2.getInfo());
console.log(jsCourse.getInfo());
console.log(dbCourse.getInfo());


// Відображення на веб-сторінці
if (typeof document !== "undefined") {
  const v2Container = document.getElementById("v2-output");
  if (v2Container) {
    v2Container.innerHTML = `
      <div class="result-block">
        <p><strong>Покупець:</strong> ${customer.getInfo()}</p>
        <p><strong>Замовлення:</strong></p>
        <ul>
          ${customer.getOrders().map((o) => `<li>${o.getOrderInfo()}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  const v1Container = document.getElementById("v1-output");
  if (v1Container) {
    v1Container.innerHTML = `
      <div class="result-block">
        <p><strong>Викладач:</strong> ${teacher.getInfo()}</p>
        <p><strong>Курси:</strong></p>
        <ul>
          <li>${jsCourse.getInfo()}</li>
          <li>${dbCourse.getInfo()}</li>
        </ul>
        <p><strong>Студенти:</strong></p>
        <ul>
          <li>${student1.getInfo()}</li>
          <li>${student2.getInfo()}</li>
        </ul>
      </div>
    `;
  }
}
