import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <input 
      type="text"
      [placeholder]="placeholder"
      [value]="value"
      (input)="onInputValueChange($event)"
    >
  `,
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder!: string;

  public value: string | undefined;
  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(private readonly changeDetector: ChangeDetectorRef) {}

  onInputValueChange(event: Event) {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value

    this.onChange(value)
  }

  writeValue(value: any): void {
    this.value = value
    this.changeDetector.detectChanges()
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }
}
