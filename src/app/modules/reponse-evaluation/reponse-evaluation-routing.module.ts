import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReponseEvaluationComponent } from "./reponse-evaluation.component";

const routes: Routes = [
  {
    path:'' , component: ReponseEvaluationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReponseEvaluationRoutingModule { }
