import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand flex-wrap bg-body-tertiary px-3">
      <a class="navbar-brand" routerLink="">CvTech</a>
      <div class="navbar-nav flex-wrap">
        @for (link of links; track link.path) {
          <a
            class="nav-link"
            [routerLink]="link.path"
            routerLinkActive="active text-primary"
            [routerLinkActiveOptions]="{ exact: true }"
            >{{ link.label }}</a
          >
        }
      </div>
    </nav>
  `,
})
export class Navbar {
  links = [
    { path: '', label: 'Cv' },
    { path: 'todo', label: 'Todo' },
    { path: 'week-todo', label: 'Week Todo' },
    { path: 'mini-word', label: 'Mini Word' },
    { path: 'color', label: 'Color' },
    { path: 'ttc', label: 'TTC' },
    { path: 'rainbow', label: 'Rainbow' },
  ];
}
