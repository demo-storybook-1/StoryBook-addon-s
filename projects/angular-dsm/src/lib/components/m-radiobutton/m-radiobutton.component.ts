import {
  ElementRef, Component, EventEmitter, Input, OnInit, Output, HostBinding,
  ChangeDetectionStrategy, HostListener, Inject, Optional, ViewChild, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'm-radiobutton',
  templateUrl: './m-radiobutton.component.html',
  styleUrls: ['./m-radiobutton.component.css']
})
export class MRadiobuttonComponent implements OnInit {

  @Input() id: string = 'id' + Math.floor(Math.random() * 1000);
  @Input() label: string = 'Hues';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  // @Input() hover: boolean = false;
  @Input() textposition: 'left' | 'right' = 'right';
  @Input() name: string = 'form control name'; // When residing in form
  @Input() required: boolean = false; // When residing in form
  // Future Sprint
  @Input() color: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size: 'micro' | 'small' | 'medium' | 'large' = 'medium';
  @Input() padding: 'small' | 'medium' | 'large' = 'medium';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @HostBinding('class') class = 'm-radiogroup-content';
  @ViewChild('mButton', { static: true }) mButton: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this);
  }

}
