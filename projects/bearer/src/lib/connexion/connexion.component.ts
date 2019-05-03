import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BearerService } from '../bearer.service';

@Component({
  selector: 'ng-connexion',
  template: `<img *ngIf="posterUrl$ | async as src" [src]="src" />`,
  styles: [
    `
  :host {
    display: inline-block;
    overflow: hidden;
    border-radius: 4px;
    line-height: 0;
  }
  `
  ]
})
export class ConnexionComponent {

  @Input() showId: number;
  posterUrl$: Observable<string>;

  constructor(private tvmaze: BearerService) { }

}
