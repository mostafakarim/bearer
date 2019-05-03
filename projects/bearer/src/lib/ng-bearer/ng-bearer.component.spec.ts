import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBearerComponent } from './ng-bearer.component';

describe('NgBearerComponent', () => {
  let component: NgBearerComponent;
  let fixture: ComponentFixture<NgBearerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBearerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBearerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
