import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

const DEFAULT_COLOR = 'lightgray';

@Component({
  imports: [FormsModule],
  selector: 'app-color',
  template: `
    <h2>Color</h2>
    <div class="p-5 mb-3 border rounded" [style.backgroundColor]="color()"></div>
    <label for="color-input" class="form-label">Écris une couleur (red, #00ff00, ...)</label>
    <input id="color-input" [(ngModel)]="color" type="text" class="form-control mb-3" />
    <button (click)="reset()" class="btn btn-secondary">Couleur par défaut</button>
  `,
})
export class Color {
  color = signal(DEFAULT_COLOR);

  reset() {
    this.color.set(DEFAULT_COLOR);
  }
}
