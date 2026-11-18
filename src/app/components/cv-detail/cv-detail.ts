import { Component, inject, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Cv } from '../../model/cv';
import { EmbaucheService } from '../../service/embauche.service';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-cv-detail',
  template: `
    <div class="card text-center">
      <div class="card-body">
        <img
          [ngSrc]="'images/' + cv().path"
          width="80"
          height="80"
          class="rounded-circle mb-3"
          [alt]="'Photo de ' + cv().firstname"
        />
        <h3 class="card-title">{{ cv().firstname }} {{ cv().name }}</h3>
        <p class="card-text">{{ cv().job }}</p>
        <dl class="row">
          <dt class="col-6">Âge</dt>
          <dd class="col-6">{{ cv().age }}</dd>
          <dt class="col-6">CIN</dt>
          <dd class="col-6">{{ cv().cin }}</dd>
        </dl>
        <button
          type="button"
          class="btn btn-primary"
          [disabled]="embaucheService.estEmbauche(cv())"
          (click)="embaucheService.embaucher(cv())"
        >
          Embaucher
        </button>
      </div>
    </div>
  `,
})
export class CvDetail {
  embaucheService = inject(EmbaucheService);
  cv = input.required<Cv>();
}
