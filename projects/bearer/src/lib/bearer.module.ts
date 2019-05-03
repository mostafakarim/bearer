import { NgModule } from '@angular/core';
import { ConnexionComponent } from './connexion/connexion.component';
import { CommonModule } from '@angular/common';
import { NgBearerComponent } from './ng-bearer/ng-bearer.component';
import { SendTestEventComponent } from './send-test-event/send-test-event.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConnexionComponent, NgBearerComponent, SendTestEventComponent],
  exports: [NgBearerComponent]
})
export class BearerModule { }
