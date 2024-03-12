import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ValeurQuestion} from "../../../../models/valeurQuestion.model";
import {Questions} from "../../../../models/questions.model";

@Component({
  selector: 'app-selection-binaire',
  templateUrl: './selection-binaire.component.html',
  styleUrls: ['./selection-binaire.component.scss']
})
export class SelectionBinaireComponent implements OnInit {

  @Input() question!: Questions;
  @Input() valeurSelectionne!: string;
  @Output() detailsCandidatureChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  notifierChangement($event: any): void {
    this.detailsCandidatureChange.emit($event.option);
  }
}
