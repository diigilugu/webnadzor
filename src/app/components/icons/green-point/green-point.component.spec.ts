import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenPointComponent } from './green-point.component';

describe('GreenPointComponent', () => {
  let component: GreenPointComponent;
  let fixture: ComponentFixture<GreenPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
