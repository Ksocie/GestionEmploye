import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilRoutingModule } from 'src/app/modules/accueil/accueil-routing.module';
import { AccueilComponent } from 'src/app/modules/accueil/accueil.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    InputTextModule,
    ButtonModule,
    DataViewModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    CardModule
  ]
})
export class AccueilModule {
}
