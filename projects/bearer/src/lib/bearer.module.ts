import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBearerComponent } from './ng-bearer/ng-bearer.component';
import { SendTestEventComponent } from './send-test-event/send-test-event.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgBearerComponent, SendTestEventComponent],
  exports: [NgBearerComponent]
})
export class BearerModule { }
