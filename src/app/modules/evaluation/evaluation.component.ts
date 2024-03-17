import {Component, OnInit} from '@angular/core';

import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {EvaluationService} from "../../services/evaluation.service";
import {Evaluation} from "../../models/evaluation.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  evaluations: Evaluation[] = [];
  code!: string;
  reference!: string;

  constructor(private route: ActivatedRoute,
              private evaluationService: EvaluationService,
              private messageService: MessageService,
              private http: HttpClient,
              private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.code = params['code'];
      this.reference = params['reference'];
      this.listeEvaluations();
    });
  }

  listeEvaluations():void{
    this.http.get<Evaluation[]>(`http://localhost:8192/axelor/ws/public/evaluations/${this.code}`).subscribe(
      (evaluation) => {
        this.evaluations = evaluation;
      },
      (error) => {
        console.error('Erreur lors du chargement des evaluations', error);
      });
  }

  naviguerVersDetailsEvaluation(reference: string, code: string) : void {
    this.router.navigate(['details-evaluation', code , reference]);
  }
}
