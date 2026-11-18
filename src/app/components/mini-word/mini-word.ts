import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-mini-word',
  template: `
    <h2>Mini Word</h2>
    <p
      class="p-3 bg-body-secondary rounded"
      [style]="{
        color: color(),
        fontSize: size() + 'px',
        fontFamily: font()
      }"
    >
      Test
    </p>
    <div class="row g-2">
      <div class="col-md-4">
        <label for="mw-color" class="form-label">Couleur</label>
        <input id="mw-color" [(ngModel)]="color" type="color" class="form-control form-control-color w-100" />
      </div>
      <div class="col-md-4">
        <label for="mw-size" class="form-label">Taille</label>
        <input id="mw-size" [(ngModel)]="size" type="number" min="8" class="form-control" />
      </div>
      <div class="col-md-4">
        <label for="mw-font" class="form-label">Police</label>
        <select id="mw-font" [(ngModel)]="font" class="form-select">
          @for (f of fonts; track f) {
            <option [value]="f">{{ f }}</option>
          }
        </select>
      </div>
    </div>
  `,
})
export class MiniWord {
  fonts = ['arial', 'verdana', 'times new roman', 'courier new', 'georgia', 'impact'];
  color = signal('#2e8b3a');
  size = signal(30);
  font = signal('arial');
}
