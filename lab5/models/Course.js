export class Course {
  constructor(title, students = []) {
    this.title = title;
    this.students = [...students];
  }

  addStudent(student) {
    if (!this.students.includes(student)) {
      this.students.push(student);
    }
  }

  getStudents() {
    return this.students;
  }

  getInfo() {
    const names = this.students.map((s) => s.name).join(", ") || "немає";
    return `Курс "${this.title}" (студентів: ${this.students.length}: ${names})`;
  }
}
