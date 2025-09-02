import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinSuggestions } from './protein-suggestions';

describe('ProteinSuggestions', () => {
  let component: ProteinSuggestions;
  let fixture: ComponentFixture<ProteinSuggestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProteinSuggestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProteinSuggestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
