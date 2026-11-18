import { Component } from '@angular/core';
import { TodoBoard } from '../todo-board/todo-board';

@Component({
  imports: [TodoBoard],
  selector: 'app-week-todo',
  template: `
    <h2>Week Todo</h2>
    <div class="row row-cols-1 row-cols-md-5 g-3">
      @for (day of days; track day) {
        <div class="col">
          <app-todo-board [title]="day" />
        </div>
      }
    </div>
  `,
})
export class WeekTodo {
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
}
