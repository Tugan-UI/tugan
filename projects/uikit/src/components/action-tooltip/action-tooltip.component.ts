import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tugan-ui-action-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-tooltip.component.html',
  styleUrl: './action-tooltip.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionTooltipComponent {}
