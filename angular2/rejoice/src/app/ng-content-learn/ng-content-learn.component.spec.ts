import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentLearnComponent } from './ng-content-learn.component';

describe('NgContentLearnComponent', () => {
  let component: NgContentLearnComponent;
  let fixture: ComponentFixture<NgContentLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentLearnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContentLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
