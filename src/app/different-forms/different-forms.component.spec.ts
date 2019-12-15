import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentFormsComponent } from './different-forms.component';

describe('DifferentFormsComponent', () => {
  let component: DifferentFormsComponent;
  let fixture: ComponentFixture<DifferentFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
