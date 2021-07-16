import { Component, Input, Output, EventEmitter, OnInit, Inject, Optional, Self, ViewChild, ElementRef, forwardRef, HostBinding, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Component({
  selector: 'm-toggle',
  templateUrl: './m-toggle.component.html',
  styleUrls: ['./m-toggle.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MToggleComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MToggleComponent),
      multi: true
    },
  ]
})
export class MToggleComponent implements OnInit, AfterViewInit, ControlValueAccessor, Validator {
  @Input() id: string;
  @Input() name: string;
  @Input() type: string;
  @Input() valueone: string;
  @Input() valuetwo: string;
  @Input() ngModelData: string;
  //@Input() ngModelData1: string;
  //@Input() ngModelData2: string;
  @Input() disabled: boolean = false;

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
    //this.ngModelData1 = value;
    //this.ngModelData2 = value;
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public onChange() {
    this.onChangeFn(this.ngModelData);
    //this.onChangeFn(this.ngModelData1);
    //this.onChangeFn(this.ngModelData2);
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return null; // return null if validation is passed.
  }

  @ViewChild('mToggle', { static: true }) mToggle: ElementRef;
  //@ViewChild('mToggle1', { static: true }) mToggle1: ElementRef;
  //@ViewChild('mToggle2', { static: true }) mToggle2: ElementRef;

  constructor(@Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

}
