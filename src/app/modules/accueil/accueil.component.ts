import {Component, OnInit} from '@angular/core';

import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {EvaluationService} from "../../services/evaluation.service";
import {Evaluation} from "../../models/evaluation.model";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  evaluations: Evaluation[] = [];

  constructor(private evaluationService: EvaluationService,
              private messageService: MessageService,
              private router: Router) { }


  ngOnInit(): void {
    this.listeEvaluations();
  }

  listeEvaluations():void{
    this.evaluationService.listeEvaluations().subscribe(
      (data)=>{
        this.evaluations = data;
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    )
  }

  naviguerVersDetailsEvaluation(code: string) : void {
    this.router.navigate(['evaluation', code]);
  }
}
