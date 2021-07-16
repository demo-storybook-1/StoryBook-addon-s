import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MChipComponent } from './m-chip.component';

describe('MChipComponent', () => {
  let component: MChipComponent;
  let fixture: ComponentFixture<MChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
