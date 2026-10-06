export class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return `Користувач: ${this.name} (${this.email})`;
  }
}
