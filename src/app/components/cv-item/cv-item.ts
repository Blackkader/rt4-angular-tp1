import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Cv } from '../../model/cv';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-cv-item',
  template: `
    <img
      [ngSrc]="'images/' + cv().path"
      width="40"
      height="40"
      class="rounded-circle me-2"
      [alt]="'Photo de ' + cv().firstname"
    />
    <span>{{ cv().firstname }} {{ cv().name }}</span>
  `,
})
export class CvItem {
  cv = input.required<Cv>();
}
