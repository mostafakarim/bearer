import { Component, OnInit, Input } from '@angular/core';
import { BearerService } from '../bearer.service';
import { BearerConfig } from '../bearer.model';
import bearer from '@bearer/js';


@Component({
  selector: 'ng-send-test-event',
  template: `<button type="submit" (click)="sendEvent()" [disabled]="!referenceId">send Event</button>`
})
export class SendTestEventComponent implements OnInit {

  @Input() referenceId: string;
  config: BearerConfig;
  constructor(private bearerService: BearerService) {
    this.config = this.bearerService.getConfig();
  }

  ngOnInit() {
  }

  sendEvent() {
    const bearerClient = bearer(this.config.BEARER_CLIENT_ID);
    bearerClient.functionFetch(this.config.INTEGRATION_NAME, 'sendEvent', {
      query: {
        setupId: this.config.INTEGRATION_SETUP_ID,
        referenceId: this.config.REFERENCE_ID
      }
    }).then(data => {
      console.log('Event details', data);
      alert(JSON.stringify(data));
    })
      .catch(console.error);
  }

}
