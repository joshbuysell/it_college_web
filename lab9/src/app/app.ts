import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  USER_ID = 28;
  private todoService = inject(TodoService);

  todos = signal<Todo[]>([]);
  isLoading = signal(false);
  isEditing = signal(false);
  currentEditId = signal<string | null>(null);

  title = signal('');
  description = signal('');
  tag = signal('Навчання');
  deadline = signal('');

  ngOnInit() {
    this.fetchTodos();
  }

  getFormData(): Todo {
    return {
      userId: this.USER_ID,
      title: this.title(),
      description: this.description(),
      tag: this.tag(),
      deadline: this.deadline(),
      isDone: false,
    };
  }

  fetchTodos() {
    this.isLoading.set(true);
    this.todoService.getAll().subscribe({
      next: (data) => {
        this.todos.set(data.reverse());
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        alert('Не вдалося завантажити завдання.');
        this.isLoading.set(false);
      },
    });
  }

  onSubmit() {
    const id = this.currentEditId();
    if (this.isEditing() && id) {
      const current = this.todos().find((t) => t.id === id);
      const updated: Todo = {
        ...current,
        ...this.getFormData(),
        isDone: current?.isDone ?? false,
      };
      this.todoService.update(id, updated).subscribe({
        next: () => {
          this.fetchTodos();
          this.resetForm();
        },
        error: (err) => {
          console.error(err);
          alert('Помилка оновлення завдання.');
        },
      });
    } else {
      const newTodo: Todo = {
        ...this.getFormData(),
        createdAt: Math.floor(Date.now() / 1000),
      };
      this.todoService.add(newTodo).subscribe({
        next: (newTask) => {
          this.todos.update((list) => [newTask, ...list]);
          this.resetForm();
        },
        error: (err) => {
          console.error(err);
          alert('Помилка створення.');
        },
      });
    }
  }

  deleteTask(id: string | undefined) {
    if (!id || !confirm('Видалити цю задачу?')) return;
    this.todoService.remove(id).subscribe({
      next: () => {
        this.todos.update((list) => list.filter((t) => t.id !== id));
      },
      error: (err) => {
        console.error(err);
        alert('Помилка видалення завдання.');
      },
    });
  }

  toggleDone(task: Todo) {
    const updatedStatus = !task.isDone;
    if (task.id) {
      this.todoService.update(task.id, { isDone: updatedStatus }).subscribe({
        next: () => {
          this.todos.update((list) =>
            list.map((t) => (t.id === task.id ? { ...t, isDone: updatedStatus } : t)),
          );
        },
        error: (err) => {
          console.error(err);
          alert('Помилка зміни статусу.');
        },
      });
    }
  }

  editTask(task: Todo) {
    this.isEditing.set(true);
    this.currentEditId.set(task.id || null);
    this.title.set(task.title);
    this.description.set(task.description);
    this.tag.set(task.tag);
    this.deadline.set(task.deadline);
  }

  resetForm() {
    this.isEditing.set(false);
    this.currentEditId.set(null);
    this.title.set('');
    this.description.set('');
    this.tag.set('Навчання');
    this.deadline.set('');
  }
}
