import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Questions} from "../../../../models/questions.model";
import {ValeurQuestion} from "../../../../models/valeurQuestion.model";

@Component({
  selector: 'app-selection-multiple',
  templateUrl: './selection-multiple.component.html',
  styleUrls: ['./selection-multiple.component.scss']
})
export class SelectionMultipleComponent implements OnInit {

  @Input() question!: Questions;
  @Input() valeurSelectionne!: string;
  @Output() detailsCandidatureChange: EventEmitter<any> = new EventEmitter<any>();

  valeurQuestionSelectionnes: any;

  constructor() { }

  ngOnInit(): void {
    this.valeurQuestionSelectionnes = this.question.valeurQuestions?.filter(valeurQuestions => this.valeurSelectionne.split(', ').includes(valeurQuestions.valeur));
  }

  notifierChangement($event: any): void {
    this.detailsCandidatureChange.emit($event.value.map((option: any) => option.valeur).join(', '));
  }
}
