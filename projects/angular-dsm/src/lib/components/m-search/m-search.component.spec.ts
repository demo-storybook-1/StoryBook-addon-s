import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSearchComponent } from './m-search.component';

describe('MSearchComponent', () => {
  let component: MSearchComponent;
  let fixture: ComponentFixture<MSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
