import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationRoutingModule } from 'src/app/modules/evaluation/evaluation-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import {CardModule} from "primeng/card";
import {EvaluationComponent} from "./evaluation.component";


@NgModule({
  declarations: [
    EvaluationComponent
  ],
  imports: [
    CommonModule,
    EvaluationRoutingModule,
    InputTextModule,
    ButtonModule,
    DataViewModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    CardModule
  ]
})
export class EvaluationModule {
}
