import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { EMPTY, Subscription, switchMap } from 'rxjs';
import { IndicatorsService } from 'src/app/services/indicators.service';

@Component({
  selector: 'app-button',
  template: `
    <button
      #button
      [type]="type"
      [attr.loading]="loading"
      >
      {{ text }}

    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  
  public subscription!: Subscription;

  @Input() type: string = 'button';
  @Input() text: string = 'button';
  @Input() loading: boolean = false;
  @ViewChild('button') button!: ElementRef;

  constructor() {}

}
