import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebnadzorFlowComponent } from './webnadzor-flow.component';

describe('WebnadzorFlowComponent', () => {
  let component: WebnadzorFlowComponent;
  let fixture: ComponentFixture<WebnadzorFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebnadzorFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebnadzorFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
