import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionTooltipComponent } from './action-tooltip.component';

describe('ActionTooltipComponent', () => {
  let component: ActionTooltipComponent;
  let fixture: ComponentFixture<ActionTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionTooltipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
