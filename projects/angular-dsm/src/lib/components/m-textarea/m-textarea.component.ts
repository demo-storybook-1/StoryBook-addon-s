import { Component, Input, Output, EventEmitter, OnInit, Inject, Optional, Self, ViewChild, ElementRef, forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Component({
  selector: 'm-textarea',
  templateUrl: './m-textarea.component.html',
  styleUrls: ['./m-textarea.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MTextareaComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MTextareaComponent),
      multi: true
    },
  ]
})
export class MTextareaComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() label: string;
  @Input() id: string;
  @Input() name: string;
  @Input() rows: number;
  @Input() cols: number;
  @Input() placeholder: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() ngModelData: string;

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

  //@Output() onChange: EventEmitter<any> = new EventEmitter();
  @ViewChild('mTextArea', { static: true }) mTextArea: ElementRef;

  constructor(@Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) { }

  ngOnInit(): void {
  }

  /*onTextAreaChangeEvent($event: any) {
    this.onChange.emit($event);
  }*/
}
