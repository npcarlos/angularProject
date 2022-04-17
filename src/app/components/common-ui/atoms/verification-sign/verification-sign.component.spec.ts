import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationSignComponent } from './verification-sign.component';

describe('VerificationSignComponent', () => {
  let component: VerificationSignComponent;
  let fixture: ComponentFixture<VerificationSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
