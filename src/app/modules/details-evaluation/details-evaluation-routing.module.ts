import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsEvaluationComponent } from "./details-evaluation.component";

const routes: Routes = [
  {
    path:'' , component: DetailsEvaluationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsEvaluationRoutingModule { }
