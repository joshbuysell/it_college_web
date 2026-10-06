import { Person } from "./Person.js";

export class Teacher extends Person {
  constructor(name, age, courses = []) {
    super(name, age);
    this.courses = [...courses];
  }

  addCourse(course) {
    this.courses.push(course);
  }

  getCourses() {
    return this.courses;
  }

  getInfo() {
    const titles = this.courses.map((c) => c.title).join(", ") || "немає";
    return `Викладач: ${this.name}, ${this.age} р., курсів: ${this.courses.length} (${titles})`;
  }
}
