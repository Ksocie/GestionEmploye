import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { CandidatureRoutingModule } from './candidature-routing.module';
import { CandidatureComponent } from './candidature.component';
import { SaisieComponent } from './question/saisie/saisie.component';
import { SelectionBinaireComponent } from './question/selection-binaire/selection-binaire.component';
import { SelectionMultipleComponent } from './question/selection-multiple/selection-multiple.component';
import { SelectionUniqueComponent } from './question/selection-unique/selection-unique.component';
import {FormsModule} from "@angular/forms";
import {StepsModule} from "primeng/steps";
import {SelectButtonModule} from "primeng/selectbutton";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [
    CandidatureComponent,
    SaisieComponent,
    SelectionBinaireComponent,
    SelectionMultipleComponent,
    SelectionUniqueComponent
  ],
    imports: [
        CommonModule,
        CandidatureRoutingModule,
        FormsModule,
        StepsModule,
        DatePipe,
        SelectButtonModule,
        MultiSelectModule,
        DropdownModule,
        ToastModule
    ]
})
export class CandidatureModule { }
