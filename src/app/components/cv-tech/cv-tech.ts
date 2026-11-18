import { Component, inject, signal } from '@angular/core';
import { Cv } from '../../model/cv';
import { CvService } from '../../service/cv.service';
import { CvList } from '../cv-list/cv-list';
import { CvDetail } from '../cv-detail/cv-detail';
import { EmbaucheList } from '../embauche-list/embauche-list';

@Component({
  imports: [CvList, CvDetail, EmbaucheList],
  selector: 'app-cv-tech',
  template: `
    <div class="row g-3 mb-4">
      <div class="col-md-5">
        <app-cv-list
          [cvs]="cvService.cvs()"
          [selectedId]="selectedCv()?.id ?? null"
          (selectCv)="selectedCv.set($event)"
        />
      </div>
      <div class="col-md-7">
        @if (selectedCv(); as cv) {
          <app-cv-detail [cv]="cv" />
        }
      </div>
    </div>
    <app-embauche-list />
  `,
})
export class CvTech {
  cvService = inject(CvService);
  /** État partagé entre la liste et le détail : le parent en est propriétaire. */
  selectedCv = signal<Cv | null>(null);
}
