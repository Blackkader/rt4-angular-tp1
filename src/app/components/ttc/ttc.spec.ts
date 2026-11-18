import { TestBed } from '@angular/core/testing';
import { Ttc } from './ttc';

describe('Ttc', () => {
  let ttc: Ttc;

  beforeEach(() => {
    ttc = TestBed.createComponent(Ttc).componentInstance;
  });

  it('a les valeurs par défaut', () => {
    expect(ttc.prix()).toBe(0);
    expect(ttc.quantite()).toBe(1);
    expect(ttc.tva()).toBe(18);
  });

  it('calcule le prix TTC sans remise pour 10 pièces (cf. énoncé)', () => {
    ttc.prix.set(100);
    ttc.quantite.set(10);
    expect(ttc.prixUnitaireTtc()).toBeCloseTo(118);
    expect(ttc.prixTotalTtc()).toBeCloseTo(1180);
    expect(ttc.discount()).toBe(0);
  });

  it('applique 20% entre 10 et 15 pièces', () => {
    ttc.prix.set(100);
    ttc.quantite.set(12);
    expect(ttc.tauxRemise()).toBe(0.2);
    expect(ttc.prixTotalTtc()).toBeCloseTo(118 * 12 * 0.8);
  });

  it('applique 30% au-delà de 15 pièces', () => {
    ttc.prix.set(100);
    ttc.quantite.set(16);
    expect(ttc.tauxRemise()).toBe(0.3);
    expect(ttc.discount()).toBeCloseTo(118 * 16 * 0.3);
  });
});
