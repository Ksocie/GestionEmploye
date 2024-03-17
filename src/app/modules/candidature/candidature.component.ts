import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NavigationService} from "../../services/navigation.service";
import {Candidature} from "../../models/candidature.model";
import {EvaluationService} from "../../services/evaluation.service";
import {MenuItem, MessageService} from "primeng/api";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Questions} from "../../models/questions.model";
import {DetailsCandidature} from "../../models/DetailsCandidature.model";
import {Module} from "../../models/module.model";
import {CandidatureService} from "../../services/candidature.service";
import {AuthService} from "../../services/auth.service";
import {DatePipe} from "@angular/common";
import {format} from "date-fns";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.scss']
})
export class CandidatureComponent implements OnInit {
  private id!: number;
  evaluation: any;
  etapes!: MenuItem[];
  module: Module[] = [];
  questions: any[] = [];
  index = 0;
  referenceEvaluation: string = '';
  candidature!: Candidature;
  detailsCandidatures: any[] = [];
  formulaireCandidature = new FormGroup({});

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private evaluationService: EvaluationService,
              private messageService: MessageService,
              private candidatureService: CandidatureService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    // const url = this.router.url;
    // this.reference = url.split('/').pop();

    // this.candidatConnecte = CandidatService.getCandidatConnecte();
    // if (!this.candidatConnecte) {
    //   localStorage.setItem('offre', this.reference);
    //   this.navigationService.goTo('identification');
    // }

    // if (this.reference && this.candidatConnecte) {
    //   this.isCandidatureExiste();
    // }
    this.route.params.subscribe(params => {
      this.referenceEvaluation = params['code'];
      this.rechercherEvaluation();
    });
  }

  suivant(): void {
    this.index += 1;
  }

  precedent(): void {
    if (this.index > 0) {
      this.index -= 1;
    }
  }

  rechercherEvaluation(): void {
    this.http.get<any>(`http://localhost:8192/axelor/ws/public/info/evaluations/${this.referenceEvaluation}`).subscribe(
      (evaluation) => {
        this.evaluation = evaluation;
        this.etapes = this.evaluation.questionnaire.module.map((module: Module)=> {
          return { label: module.nomModule };
        });

        this.module = this.evaluation.questionnaire.module;

        this.candidature = new Candidature();
        this.module?.forEach(module => {
          module.questions?.forEach(questions => {
            this.detailsCandidatures.push(
              {
                questions: questions,
                valeur: undefined,
                valeurQuestions: undefined
              }
            );

            this.formulaireCandidature.addControl(questions.code, new FormControl(
              '', questions.obligatoire ? Validators.required : null));
          });
        });
      },
      (error) => {
        console.error('Erreur lors du chargement des questionnaires', error);
      });
  }

  getDetailsCandidature(questions: any): any {
    return this.detailsCandidatures.find(detailsCandidature => detailsCandidature.questions.code === questions.code);
  }

  postuler(): void {
    this.detailsCandidatures.forEach(detailsCandidature => {
      const question = detailsCandidature.questions;
      const formControl = this.formulaireCandidature.get(question.code);
      if (['SAISIE_LIBRE', 'SELECTION_MULTIPLE'].includes(question.typeQuestion.code)) {
        this.getDetailsCandidature(question).valeur = formControl?.value;
      } else {
        this.getDetailsCandidature(question).valeurQuestions = formControl?.value;
      }
    });

    this.candidature.detailsCandidatures = this.detailsCandidatures;
    this.candidature.evaluation = this.evaluation;
    this.candidature.user = this.authService.getCandidatConnecte();
    const date = new Date();
    // Formater la date dans le format "dd-MM-yyyy HH:mm"
    const dateFormatee = format(date, 'dd-MM-yyyy HH:mm');
    this.candidature.date = dateFormatee;

    this.candidatureService.creer(this.candidature).subscribe({
      next: () => {
        this.notifierEnregistrement();
        setTimeout(() => this.router.navigate(['/home']), 2000);
      }
    });
  }

  onDetailsCandidatureChange($event: any, questions: any ): void {
    this.formulaireCandidature.get(this.getDetailsCandidature(questions).questions.code)?.setValue($event);
  }

  notifierEnregistrement(): void {
    this.messageService.add(
      { severity: 'success', summary: 'Evaluation envoyé', detail: 'Votre évaluation sera analysée. Merci!' }
    );
  }
}
