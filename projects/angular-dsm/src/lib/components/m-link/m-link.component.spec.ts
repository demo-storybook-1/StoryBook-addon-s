import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLinkComponent } from './m-link.component';

describe('MButtonComponent', () => {
  let component: MLinkComponent;
  let fixture: ComponentFixture<MLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
