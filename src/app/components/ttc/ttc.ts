import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CurrencyPipe],
  selector: 'app-ttc',
  template: `
    <h2>TTC Calculator</h2>
    <div class="row g-2 mb-3">
      <div class="col-md-4">
        <label for="prix" class="form-label">Prix HT</label>
        <input id="prix" [(ngModel)]="prix" type="number" min="0" class="form-control" />
      </div>
      <div class="col-md-4">
        <label for="quantite" class="form-label">Quantité</label>
        <input id="quantite" [(ngModel)]="quantite" type="number" min="1" class="form-control" />
      </div>
      <div class="col-md-4">
        <label for="tva" class="form-label">TVA (%)</label>
        <input id="tva" [(ngModel)]="tva" type="number" min="0" class="form-control" />
      </div>
    </div>
    <div class="row g-2">
      <div class="col-md-4">
        <div class="alert alert-info">Prix unitaire TTC : {{ prixUnitaireTtc() | currency }}</div>
      </div>
      <div class="col-md-4">
        <div class="alert alert-success">Prix total TTC : {{ prixTotalTtc() | currency }}</div>
      </div>
      <div class="col-md-4">
        <div class="alert alert-danger">Discount : {{ discount() | currency }}</div>
      </div>
    </div>
  `,
})
export class Ttc {
  prix = signal(0);
  quantite = signal(1);
  tva = signal(18);

  prixUnitaireTtc = computed(() => (this.prix() || 0) * (1 + (this.tva() || 0) / 100));

  /** Plus de 15 pièces : 30%. Plus de 10 pièces : 20%. Sinon pas de remise. */
  tauxRemise = computed(() => {
    const quantite = this.quantite() || 0;
    if (quantite > 15) return 0.3;
    if (quantite > 10) return 0.2;
    return 0;
  });

  prixTotalSansRemise = computed(() => this.prixUnitaireTtc() * (this.quantite() || 0));
  discount = computed(() => this.prixTotalSansRemise() * this.tauxRemise());
  prixTotalTtc = computed(() => this.prixTotalSansRemise() - this.discount());
}
