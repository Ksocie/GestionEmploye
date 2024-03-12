import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsEvaluationRoutingModule } from './details-evaluation-routing.module';
import { DetailsEvaluationComponent } from './details-evaluation.component';
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";


@NgModule({
  declarations: [
    DetailsEvaluationComponent
  ],
  imports: [
    CommonModule,
    DetailsEvaluationRoutingModule,
    ButtonModule,
    TableModule
  ]
})
export class DetailsEvaluationModule { }
