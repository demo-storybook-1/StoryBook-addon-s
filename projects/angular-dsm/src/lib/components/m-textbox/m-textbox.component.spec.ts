import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTextboxComponent } from './m-textbox.component';

describe('MTextboxComponent', () => {
  let component: MTextboxComponent;
  let fixture: ComponentFixture<MTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
