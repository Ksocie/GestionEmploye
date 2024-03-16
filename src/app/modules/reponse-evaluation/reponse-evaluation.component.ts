import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Evaluation} from "../../models/evaluation.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reponse-evaluation',
  templateUrl: './reponse-evaluation.component.html',
  styleUrls: ['./reponse-evaluation.component.scss']
})
export class ReponseEvaluationComponent implements OnInit {

  evaluation!:Evaluation;
  referenceEvaluation!: string;

  constructor(private http : HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.referenceEvaluation = params['reference'];
      this.chargerReponseEvaluation();
    });
  }

  chargerReponseEvaluation(): void {
    this.http.get<any>(`http://localhost:8192/axelor/ws/public/info/evaluations/${this.referenceEvaluation}`).subscribe(
      (evaluation) => {
        this.evaluation = evaluation;
      },
      (error) => {
        console.error('Erreur lors du chargement des questionnaires', error);
      });
  }

}
