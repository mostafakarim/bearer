import { Injectable } from '@angular/core';
import { BearerConfig } from './bearer.model';

@Injectable({
  providedIn: 'root'
})
export class BearerService {
  private config: BearerConfig;
  constructor() { }
  setConfig(config: BearerConfig) {
    this.config = config;
  }
  getConfig(): BearerConfig {
    return this.config;
  }
}
