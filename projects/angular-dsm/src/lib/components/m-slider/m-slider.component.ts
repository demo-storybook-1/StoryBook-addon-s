import { ElementRef, Component, EventEmitter, Input, OnInit, Output, HostBinding, ChangeDetectionStrategy, HostListener, Inject, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Component({
  selector: 'm-slider',
  templateUrl: './m-slider.component.html',
  styleUrls: ['./m-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSliderComponent implements OnInit {

  @Input() label: string = 'Primary';
  @Input() disabled: boolean = false;
  @Input() type: string = 'primary';
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 0;

  @Output() onSlide: EventEmitter<any> = new EventEmitter();

  @HostBinding('class') class = 'm-button-content';
  @ViewChild('mSliderTrack', { static: true }) mSliderTrack: ElementRef;
  @ViewChild('mSliderThumb', { static: true }) mSliderThumb: ElementRef;
  @ViewChild('mSliderInput', { static: true }) mSliderInput: ElementRef;


  constructor(@Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) { }

  ngOnInit(): void {
    this._uddateDisableState(this.disabled);
    this.changeStyles();
  }

  onSliderChange($event) {
    this.step = Number($event.target.value);
    this.changeStyles();
    this.onSlide.emit($event);
  }

  private _uddateDisableState(isDisabled: any) {
    if (isDisabled === true || isDisabled === 'true') {
      this.mSliderInput.nativeElement.setAttribute("disabled", isDisabled);
    }
  }
  private changeStyles() {
    let translteTrackBacground: number, translteTrackFill: number, scaleTrackBacground: number, scaleTrackFill: number, translateThumb: number;

    if (this.step === 0) {
      translteTrackBacground = 7;
      translteTrackFill = -7;
      scaleTrackBacground = 1;
      scaleTrackFill = 0;
    } else {
      translteTrackBacground = translteTrackFill = 0;
      const maxPercentge = this.max / 10
      const resultObject = this.calculatePercentage(maxPercentge);
      scaleTrackBacground = Number(`0.${resultObject.scaleTrackBacground}`);
      scaleTrackFill = this.step !== this.max ? Number(`0.${resultObject.scaleTrackFill}`) : 1;
    }
    translateThumb = ((this.max - this.step) * 100) / this.max;
    this.mSliderTrack.nativeElement.firstElementChild.style = `transform: translateX(${translteTrackBacground}px) scale3d(${scaleTrackBacground}, 1, 1)`;
    this.mSliderTrack.nativeElement.lastElementChild.style = `transform: translateX(${translteTrackFill}px) scale3d(${scaleTrackFill}, 1, 1)`;
    this.mSliderThumb.nativeElement.style = `transform: translateX(-${translateThumb}%)`;
  }

  private calculatePercentage(maxPercentge) {
    let returnObject = {
      scaleTrackBacground: null,
      scaleTrackFill: null
    };
    const trackData = this.step / maxPercentge;
    if (trackData % 1 === 0) {
      returnObject.scaleTrackFill = trackData
      returnObject.scaleTrackBacground = 10 - returnObject.scaleTrackFill;
    } else {
      returnObject.scaleTrackFill = trackData.toString().replace(/\./g, "");
      const trckBackgound = 10 - Number(`.${returnObject.scaleTrackFill}`);
      returnObject.scaleTrackBacground = trckBackgound % 1 === 0 ? trckBackgound : trckBackgound.toString().split('.')[1];
    }
    return returnObject
  }

}
