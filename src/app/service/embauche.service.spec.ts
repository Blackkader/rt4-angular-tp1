import { TestBed } from '@angular/core/testing';
import { EmbaucheService } from './embauche.service';
import { Cv } from '../model/cv';

const cv = (id: number): Cv => ({
  id, name: 'n', firstname: 'f', age: 20, cin: '1', job: 'j', path: 'cv.svg',
});

describe('EmbaucheService', () => {
  let service: EmbaucheService;

  beforeEach(() => {
    service = TestBed.inject(EmbaucheService);
  });

  it("n'embauche pas deux fois le même cv", () => {
    expect(service.embaucher(cv(1))).toBe(true);
    expect(service.embaucher(cv(1))).toBe(false);
    expect(service.embauches().length).toBe(1);
  });

  it('alerte uniquement au-delà de 3 embauchés', () => {
    [1, 2, 3].forEach((id) => service.embaucher(cv(id)));
    expect(service.budgetDepasse()).toBe(false);
    service.embaucher(cv(4));
    expect(service.budgetDepasse()).toBe(true);
    service.fermerToast();
    expect(service.budgetDepasse()).toBe(false);
  });
});
