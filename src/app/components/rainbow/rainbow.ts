import { Component } from '@angular/core';
import { Rainbow as RainbowDirective } from '../../directives/rainbow';

@Component({
  imports: [RainbowDirective],
  selector: 'app-rainbow',
  template: `
    <h2>Arc en ciel</h2>
    <label for="rainbow-input" class="form-label">Écris quelque chose</label>
    <input id="rainbow-input" appRainbow type="text" class="form-control" />
  `,
})
export class RainbowDemo {}
