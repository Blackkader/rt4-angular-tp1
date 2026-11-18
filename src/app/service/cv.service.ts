import { Service, signal } from '@angular/core';
import { Cv } from '../model/cv';

@Service()
export class CvService {
  private readonly _cvs = signal<Cv[]>([
    { id: 1, name: 'Chaabane', firstname: 'Mahdi', age: 25, cin: '09876543', job: 'Développeur web', path: 'cv.svg' },
    { id: 2, name: 'Fkih', firstname: 'Mehdi', age: 31, cin: '01234567', job: 'Data analyst', path: 'cv.svg' },
    { id: 3, name: 'Ben Ali', firstname: 'Sarra', age: 28, cin: '05556677', job: 'Designer UI/UX', path: 'avatar.svg' },
    { id: 4, name: 'Trabelsi', firstname: 'Yassine', age: 35, cin: '07778899', job: 'DevOps', path: 'avatar.svg' },
    { id: 5, name: 'Gharbi', firstname: 'Ines', age: 23, cin: '04443322', job: 'Testeuse QA', path: 'avatar.svg' },
  ]);

  /** Liste des CVs inscrits (lecture seule pour les composants). */
  readonly cvs = this._cvs.asReadonly();
}
