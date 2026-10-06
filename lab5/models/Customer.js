import { User } from "./User.js";

export class Customer extends User {
  constructor(name, email, orders = []) {
    super(name, email);
    this.orders = [...orders];
  }

  addOrder(order) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }

  viewOrders() {
    if (this.orders.length === 0) {
      return `${this.name} ще не має замовлень.`;
    }
    return this.orders.map((o) => o.getOrderInfo()).join("\n");
  }
}
