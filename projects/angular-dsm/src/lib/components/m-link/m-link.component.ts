import { ElementRef, Component, EventEmitter, Input, OnInit, Output, HostBinding, ChangeDetectionStrategy, HostListener, Inject, Optional, ViewChild, ViewEncapsulation } from '@angular/core';


import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Component({
  selector: 'm-link, a[m-link]',
  templateUrl: './m-link.component.html',
  styleUrls: ['./m-link.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MLinkComponent implements OnInit {

  @Input() label: string = '';
  @Input() url: string = '/';

   @Output() onClick: EventEmitter<any> = new EventEmitter();

   @HostBinding('class') class = 'm-link-content';
   @ViewChild('mLink', { static: true }) mLink: ElementRef;

   constructor(@Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) { }

  ngOnInit(): void {

  }

}
