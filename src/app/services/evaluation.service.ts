import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Evaluation} from "../models/evaluation.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private baseUrl = 'http://localhost:8192/axelor/ws/public';

  constructor(private httpClient: HttpClient) { }


  listeEvaluations(): Observable<Evaluation[]>{
    return this.httpClient.get<Evaluation[]>(`${this.baseUrl}/evaluations`);
  }

  // infoEvaluations(reference: string): Observable<EvaluationVO>{
  //   const params = new HttpParams().append('reference', reference);
  //   return this.httpClient.get<EvaluationVO>(`${this.baseUrl}/info/evaluations`, {params: params});
  // }
}
