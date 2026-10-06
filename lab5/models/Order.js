export class Order {
  constructor(id, products = []) {
    this.id = id;
    this.products = [...products];
  }

  addProduct(product) {
    this.products.push(product);
  }

  get totalPrice() {
    return this.products.reduce((sum, item) => sum + item.price, 0);
  }

  getOrderInfo() {
    const list = this.products.map((p) => p.name).join(", ") || "порожньо";
    return `Замовлення #${this.id}: [${list}], загальна сума: ${this.totalPrice} грн`;
  }
}
