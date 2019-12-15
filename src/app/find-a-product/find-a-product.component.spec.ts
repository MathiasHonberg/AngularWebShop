import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAProductComponent } from './find-a-product.component';

describe('FindAProductComponent', () => {
  let component: FindAProductComponent;
  let fixture: ComponentFixture<FindAProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
