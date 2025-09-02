import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSlot } from './ad-slot';

describe('AdSlot', () => {
  let component: AdSlot;
  let fixture: ComponentFixture<AdSlot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdSlot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSlot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
