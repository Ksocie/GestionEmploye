import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReponseEvaluationRoutingModule } from './reponse-evaluation-routing.module';
import { ReponseEvaluationComponent } from './reponse-evaluation.component';
import {LoginComponent} from "../login/login.component";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    ReponseEvaluationComponent
  ],
  exports: [
    ReponseEvaluationComponent
  ],
    imports: [
        CommonModule,
        ReponseEvaluationRoutingModule,
        TableModule
    ]
})
export class ReponseEvaluationModule { }
