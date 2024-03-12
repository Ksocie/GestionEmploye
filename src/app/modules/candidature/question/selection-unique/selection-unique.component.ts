import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Questions} from "../../../../models/questions.model";

@Component({
  selector: 'app-selection-unique',
  templateUrl: './selection-unique.component.html',
  styleUrls: ['./selection-unique.component.scss']
})
export class SelectionUniqueComponent implements OnInit {

  @Input() question!: Questions;
  @Input() valeurSelectionne!: string;
  @Output() detailsCandidatureChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  notifierChangement($event: any): void {
    this.detailsCandidatureChange.emit($event.value);
  }
}
