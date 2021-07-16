import { Component, Input, Output, EventEmitter, OnInit, Inject, Optional, Self, ViewChild, ElementRef, forwardRef, HostBinding, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Component({
  selector: 'm-checkbox',
  templateUrl: './m-checkbox.component.html',
  styleUrls: ['./m-checkbox.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MCheckboxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MCheckboxComponent),
      multi: true
    },
  ]
})
export class MCheckboxComponent implements OnInit, AfterViewInit, ControlValueAccessor, Validator {

  @Input() label: string;
  @Input() id: string;
  @Input() name: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() checked: boolean = false;
  @Input() ngModelData: string;
  @Input() checkboxvalue: any = "";
  @Output() onClick: EventEmitter<any> = new EventEmitter();


  public onChangeFn = (_: any) => { };
  public onTouchedFn = () => { };

  val = "";
  set value(val: any) {
    if (val !== undefined && this.val !== val) {
      this.val = val
      this.onChangeFn(val);
      this.onTouchedFn();
    }
  }

  public writeValue(value: any): void {
    this.ngModelData = value;
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public onChange() {
    this.onChangeFn(this.ngModelData);
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return null; // return null if validation is passed.
  }

  @ViewChild('mCheckBox', { static: true }) mCheckBox: ElementRef;

  constructor(@Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) { }

  ngOnInit(): void {
    this._uddateCheckedState(this.checked);
  }

  ngAfterViewInit() {
    this._uddateCheckedState(this.checked);
  }

  private _uddateCheckedState(isChecked: any) {
    if (isChecked === true || isChecked === 'true') {
      this.checked = this.mCheckBox.nativeElement.checked = true;
      this.mCheckBox.nativeElement.value = this.checkboxvalue;
    }
  }

  onCheckBoxClick($event) {
    this.onClick.emit($event);
  }

}
