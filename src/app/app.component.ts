
import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'ld-root',
  template: `
    <ng-bearer [config]="environment.bearer"></ng-bearer>
  `
})
export class AppComponent {
  environment = environment;
  constructor() {
  }
}
