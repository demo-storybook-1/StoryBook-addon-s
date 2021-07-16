import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRadiogroupComponent } from './m-radiogroup.component';

describe('MRadiogroupComponent', () => {
  let component: MRadiogroupComponent;
  let fixture: ComponentFixture<MRadiogroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRadiogroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MRadiogroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
