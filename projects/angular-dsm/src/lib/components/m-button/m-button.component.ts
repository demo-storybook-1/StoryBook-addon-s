import { ElementRef, Component, EventEmitter, Input, OnInit, Output, HostBinding, ChangeDetectionStrategy, HostListener, Inject, Optional, ViewChild, ViewEncapsulation } from '@angular/core';


import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Component({
  selector: 'm-button, button[m-button]',
  templateUrl: './m-button.component.html',
  styleUrls: ['./m-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MButtonComponent implements OnInit {

  @Input() label: string = 'Primary';
  @Input() disabled: boolean = false;
  @Input() type: string = 'primary';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @HostBinding('class') class = 'm-button-content';
  @ViewChild('mButton', { static: true }) mButton: ElementRef;

  constructor(@Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) { }

  ngOnInit(): void {
    this._uddateDisableState(this.disabled);
  }

  onBtnClick($event) {
    this.onClick.emit($event);
  }

  private _uddateDisableState(isDisabled: any) {
    if (isDisabled === true || isDisabled === 'true') {
      this.mButton.nativeElement.setAttribute("disabled", isDisabled);
    }
  }

}
