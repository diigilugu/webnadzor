import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgisPageComponent } from './egis-page.component';

describe('EgisPageComponent', () => {
  let component: EgisPageComponent;
  let fixture: ComponentFixture<EgisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgisPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
