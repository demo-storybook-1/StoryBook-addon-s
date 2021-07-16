import { Component, Input, Output, EventEmitter, OnInit, Inject, Optional, Self, ViewChild, ElementRef, forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Component({
  selector: 'm-dropdown',
  templateUrl: './m-dropdown.component.html',
  styleUrls: ['./m-dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MDropdownComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MDropdownComponent),
      multi: true
    },
  ]
})
export class MDropdownComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() label: string;
  @Input() id: string;
  @Input() name: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() ngModelData: string;
  @Input() size: number;
  @Input() multiselect: boolean = false;
  @Input() items: Array<String>;

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

  @ViewChild('mDropDown', { static: true }) mDropDown: ElementRef;

  constructor(@Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) { }

  ngOnInit(): void {
    //console.log(this.items);
  }

}
