import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedSelectionComponent } from './recommended-selection.component';

describe('RecommendedSelectionComponent', () => {
  let component: RecommendedSelectionComponent;
  let fixture: ComponentFixture<RecommendedSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendedSelectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
