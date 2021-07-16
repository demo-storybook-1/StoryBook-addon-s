import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm-chip',
  templateUrl: './m-chip.component.html',
  styleUrls: ['./m-chip.component.css']
})
export class MChipComponent implements OnInit {

  @Input() label: string = 'Default';
  @Input() type: 'default' | 'success' | 'warning' | 'error' = 'default';
  @Input() icon: boolean = false;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
