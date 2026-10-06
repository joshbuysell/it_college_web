export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `${this.name}, ${this.age} р.`;
  }
}
