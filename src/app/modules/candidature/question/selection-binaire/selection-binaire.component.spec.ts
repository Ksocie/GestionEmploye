import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionBinaireComponent } from './selection-binaire.component';

describe('SelectionBinaireComponent', () => {
  let component: SelectionBinaireComponent;
  let fixture: ComponentFixture<SelectionBinaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionBinaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionBinaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
