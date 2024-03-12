import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.scss']
})
export class SaisieComponent implements OnInit {

  @Input() question: any;
  @Input() valeurSaisie!: string ;
  @Output() detailsCandidatureChange: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  notifierChangement($event: any): void {
    this.detailsCandidatureChange.emit($event.target.value);
  }
}
