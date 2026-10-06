import { Person } from "./Person.js";

export class Student extends Person {
  constructor(name, age, courses = []) {
    super(name, age);
    this.courses = [...courses];
  }

  enrollCourse(course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
      course.addStudent(this);
    }
  }

  getCourses() {
    return this.courses;
  }

  getInfo() {
    const titles = this.courses.map((c) => c.title).join(", ") || "немає";
    return `Студент: ${this.name}, ${this.age} р., курсів: ${this.courses.length} (${titles})`;
  }
}
