import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../service/todo.service';

@Component({
  imports: [FormsModule],
  selector: 'app-todo-board',
  // Chaque board a sa propre instance du service (comme Pere avec LoggerService).
  providers: [TodoService],
  template: `
    @if (title()) {
      <h3>{{ title() }}</h3>
    }
    <label [for]="id + '-name'" class="form-label mb-0">Name :</label>
    <input [id]="id + '-name'" [(ngModel)]="name" type="text" class="form-control mb-2" />
    <label [for]="id + '-content'" class="form-label mb-0">Content :</label>
    <input [id]="id + '-content'" [(ngModel)]="content" type="text" class="form-control mb-2" />
    <button type="button" class="btn btn-primary mb-3" [disabled]="!name()" (click)="add()">
      Add Todo
    </button>
    <ul class="list-group">
      @for (todo of todoService.todos(); track todo.id) {
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <span>
            <strong>{{ todo.name }}</strong><br />{{ todo.content }}
          </span>
          <button
            type="button"
            class="btn btn-sm btn-outline-danger"
            [attr.aria-label]="'Supprimer ' + todo.name"
            (click)="todoService.deleteTodo(todo.id)"
          >
            X
          </button>
        </li>
      }
    </ul>
  `,
})
export class TodoBoard {
  private static count = 0;
  protected readonly id = `todo-${TodoBoard.count++}`;

  todoService = inject(TodoService);
  title = input('');
  name = signal('');
  content = signal('');

  add() {
    this.todoService.addTodo(this.name(), this.content());
    this.name.set('');
    this.content.set('');
  }
}
