import {
  ElementRef, Component, EventEmitter, Input, OnInit, Output, HostBinding,
  ChangeDetectionStrategy, HostListener, Inject, Optional, ViewChild, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'm-radiogroup',
  templateUrl: './m-radiogroup.component.html',
  styleUrls: ['./m-radiogroup.component.css']
})
export class MRadiogroupComponent implements OnInit {

  @Input() label: string = 'Please select your option';
  @Input() items: string[] = ['Option 1', 'Option 2', 'Option 3'];
  @Input() disabledIndexes: number[] = [];
  @Input() selectedIndex: number = -1;
  @Input() textposition: 'left' | 'right' = 'right';
  @Input() name: string = 'form control name';
  @Input() color: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size: 'micro' | 'small' | 'medium' | 'large' = 'medium';
  @Input() padding: 'small' | 'medium' | 'large' = 'medium';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @HostBinding('class') class = 'm-radiogroup-content';
  @ViewChild('mButton', { static: true }) mButton: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
