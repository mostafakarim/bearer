import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import bearer from '@bearer/js';
import { BearerConfig } from '../bearer.model';
import { BearerService } from '../bearer.service';
import Bearer from '@bearer/js/lib/cjs/lib/bearer';

@Component({
  selector: 'ng-bearer',
  templateUrl: './ng-bearer.component.html',
  styleUrls: ['./ng-bearer.component.css']
})
export class NgBearerComponent implements OnInit {

  @Input() config: BearerConfig;
  @ViewChild('selectOption') selectOption: ElementRef;
  referenceId: string;
  policies: Array<any>;
  bearerClient: Bearer;
  constructor(private bearerService: BearerService) {
  }

  ngOnInit() {
    this.bearerClient = bearer(this.config.BEARER_CLIENT_ID);
    this.bearerService.setConfig(this.config);

    this.fetchEscalationPolicies();
  }

  fetchEscalationPolicies() {
    this.bearerClient.functionFetch(this.config.INTEGRATION_NAME, 'listEscalationPolicies', {
      query: {
        setupId: this.config.INTEGRATION_SETUP_ID
      }
    })
      .then((result) => {
        this.policies = result['data'];
      })
      .catch(console.error);
  }

  saveSettings(selectedValue: number) {
    this.referenceId = selectedValue.toString();
    this.bearerClient.functionFetch(this.config.INTEGRATION_NAME, 'createIntegration', {
      query: {
        setupId: this.config.INTEGRATION_SETUP_ID,
        referenceId: this.config.REFERENCE_ID
      },
      escalationPolicy: this.policies[selectedValue]
    }).then(data => {
      this.referenceId = data['referenceId'];
    }).catch(console.error);
  }


}
