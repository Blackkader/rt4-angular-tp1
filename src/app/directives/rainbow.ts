import { Directive, signal } from '@angular/core';

/**
 * Arc-en-ciel : à chaque lettre tapée, la couleur du texte et de la bordure change.
 * Le sélecteur `input[appRainbow]` empêche l'instanciation sur toute autre balise.
 */
@Directive({
  selector: 'input[appRainbow]',
  host: {
    '[style.color]': 'color()',
    '[style.borderColor]': 'color()',
    '(keyup)': 'changeColor()',
  },
})
export class Rainbow {
  color = signal('black');

  changeColor() {
    this.color.set(this.randomColor());
  }

  randomColor(): string {
    const channel = () => Math.floor(Math.random() * 256);
    return `rgb(${channel()}, ${channel()}, ${channel()})`;
  }
}
