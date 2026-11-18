import { Service, signal } from '@angular/core';
import { Cv } from '../model/cv';

/** Au-delà de ce nombre d'embauchés, le budget est dépassé. */
export const BUDGET_MAX_EMBAUCHES = 3;
const TOAST_DURATION_MS = 5000;

@Service()
export class EmbaucheService {
  private readonly _embauches = signal<Cv[]>([]);
  readonly embauches = this._embauches.asReadonly();

  /** Vrai tant que le toast "budget dépassé" doit être affiché. */
  readonly budgetDepasse = signal(false);

  estEmbauche(cv: Cv): boolean {
    return this._embauches().some((embauche) => embauche.id === cv.id);
  }

  /** Embauche un cv. Retourne false s'il était déjà embauché. */
  embaucher(cv: Cv): boolean {
    if (this.estEmbauche(cv)) return false;
    this._embauches.update((liste) => [...liste, cv]);
    if (this._embauches().length > BUDGET_MAX_EMBAUCHES) {
      this.budgetDepasse.set(true);
      setTimeout(() => this.fermerToast(), TOAST_DURATION_MS);
    }
    return true;
  }

  fermerToast() {
    this.budgetDepasse.set(false);
  }
}
