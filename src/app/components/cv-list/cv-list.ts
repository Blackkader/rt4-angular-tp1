import { Component, input, output } from '@angular/core';
import { Cv } from '../../model/cv';
import { CvItem } from '../cv-item/cv-item';

@Component({
  imports: [CvItem],
  selector: 'app-cv-list',
  template: `
    <div class="list-group">
      @for (cv of cvs(); track cv.id) {
        <button
          type="button"
          class="list-group-item list-group-item-action d-flex align-items-center"
          [class.list-group-item-primary]="$odd"
          [class.active]="cv.id === selectedId()"
          (click)="selectCv.emit(cv)"
        >
          <app-cv-item [cv]="cv" />
        </button>
      } @empty {
        <p>Aucun cv inscrit.</p>
      }
    </div>
  `,
})
export class CvList {
  cvs = input.required<Cv[]>();
  selectedId = input<number | null>(null);
  selectCv = output<Cv>();
}
