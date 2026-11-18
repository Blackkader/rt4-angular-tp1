import { inject, Service, signal } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from './logger.service';

@Service()
export class TodoService {
  private readonly logger = inject(LoggerService);
  private readonly _todos = signal<Todo[]>([]);
  private nextId = 1;

  readonly todos = this._todos.asReadonly();

  getTodos(): Todo[] {
    return this._todos();
  }

  logTodos() {
    this.logger.log(this._todos());
  }

  addTodo(name: string, content: string) {
    this._todos.update((todos) => [...todos, { id: this.nextId++, name, content }]);
    this.logTodos();
  }

  deleteTodo(id: number) {
    this._todos.update((todos) => todos.filter((todo) => todo.id !== id));
    this.logTodos();
  }
}
