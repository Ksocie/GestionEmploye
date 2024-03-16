import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseEvaluationComponent } from './reponse-evaluation.component';

describe('ReponseEvaluationComponent', () => {
  let component: ReponseEvaluationComponent;
  let fixture: ComponentFixture<ReponseEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponseEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReponseEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
