import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Evaluation} from "../../models/evaluation.model";


@Component({
  selector: 'app-details-evaluation',
  templateUrl: './details-evaluation.component.html',
  styleUrls: ['./details-evaluation.component.scss']
})
export class DetailsEvaluationComponent implements OnInit {
  referenceEvaluation: string = '';
  evaluation!: Evaluation;
  status!: boolean;
  code!: string;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.referenceEvaluation = params['reference'];
      this.code = params['code'];
      this.chargerDetailsEvaluation();
    });
  }

  chargerDetailsEvaluation(): void {
    this.http.get<any>(`http://localhost:8192/axelor/ws/public/info/evaluations/${this.code}/${this.referenceEvaluation}`).subscribe(
      (evaluation) => {
        this.evaluation = evaluation;
      },
      (error) => {
        console.error('Erreur lors du chargement des questionnaires', error);
      });
  }

  // loadQuestionnairesParCodeEvaluation(codeEvaluation : string): void {
  //   this.http.get<any>(`http://localhost:8192/axelor/ws/public/${this.referenceEvaluation}`).subscribe(
  //     (questionnaire) => {
  //       this.questionnaire = questionnaire;
  //     },
  //     (error) => {
  //       console.error('Erreur lors du chargement des questionnaires', error);
  //     });
  // }

  participer(code : string):void{
    this.router.navigate(['candidature', code]);
  }

  voirInfo(reference : string) : void {
    this.router.navigate(['reponse', reference]);
  }
}
