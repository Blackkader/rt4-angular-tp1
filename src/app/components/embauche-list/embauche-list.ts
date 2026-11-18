import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../../service/embauche.service';

@Component({
  selector: 'app-embauche-list',
  template: `
    <h3>Cvs embauchés</h3>
    <ul class="list-group">
      @for (cv of embaucheService.embauches(); track cv.id) {
        <li class="list-group-item">{{ cv.firstname }} {{ cv.name }} - {{ cv.job }}</li>
      } @empty {
        <li class="list-group-item text-body-secondary">Personne n'est embauché pour le moment.</li>
      }
    </ul>

    @if (embaucheService.budgetDepasse()) {
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div class="toast show text-bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body">Attention : le budget a été dépassé !</div>
            <button
              type="button"
              class="btn-close btn-close-white me-2 m-auto"
              aria-label="Fermer"
              (click)="embaucheService.fermerToast()"
            ></button>
          </div>
        </div>
      </div>
    }
  `,
})
export class EmbaucheList {
  embaucheService = inject(EmbaucheService);
}
