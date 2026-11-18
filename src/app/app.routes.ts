import { Routes } from '@angular/router';
import { CvTech } from './components/cv-tech/cv-tech';
import { TodoBoard } from './components/todo-board/todo-board';
import { WeekTodo } from './components/week-todo/week-todo';
import { MiniWord } from './components/mini-word/mini-word';
import { Color } from './components/color/color';
import { Ttc } from './components/ttc/ttc';
import { RainbowDemo } from './components/rainbow/rainbow';

export const routes: Routes = [
  { path: '', component: CvTech },
  { path: 'todo', component: TodoBoard },
  { path: 'week-todo', component: WeekTodo },
  { path: 'mini-word', component: MiniWord },
  { path: 'color', component: Color },
  { path: 'ttc', component: Ttc },
  { path: 'rainbow', component: RainbowDemo },
];
