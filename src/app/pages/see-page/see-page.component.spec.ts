import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePageComponent } from './see-page.component';

describe('SeePageComponent', () => {
  let component: SeePageComponent;
  let fixture: ComponentFixture<SeePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
