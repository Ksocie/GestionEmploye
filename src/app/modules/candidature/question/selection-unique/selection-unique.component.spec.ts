import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionUniqueComponent } from './selection-unique.component';

describe('SelectionUniqueComponent', () => {
  let component: SelectionUniqueComponent;
  let fixture: ComponentFixture<SelectionUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionUniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
