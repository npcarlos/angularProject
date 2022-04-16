import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailsPageComponent } from './events-details-page.component';

describe('EventsDetailsPageComponent', () => {
  let component: EventsDetailsPageComponent;
  let fixture: ComponentFixture<EventsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
