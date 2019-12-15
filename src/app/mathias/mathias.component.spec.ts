import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathiasComponent } from './mathias.component';

describe('MathiasComponent', () => {
  let component: MathiasComponent;
  let fixture: ComponentFixture<MathiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
