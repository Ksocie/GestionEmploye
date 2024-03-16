import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ActivatedRoute, RouterOutlet,} from "@angular/router";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastModule } from "primeng/toast";
import { HttpClientModule } from "@angular/common/http";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { AccueilModule } from "./modules/accueil/accueil.module";
import { DetailsEvaluationModule } from "./modules/details-evaluation/details-evaluation.module";
import { LoginModule } from "./modules/login/login.module";
import { CandidatureModule } from "./modules/candidature/candidature.module";
import {MessageService, SharedModule} from "primeng/api";
import { AppRoutingModule } from "./app-routing.module";
import { ReponseEvaluationModule } from "./modules/reponse-evaluation/reponse-evaluation.module";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    FormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
    AccueilModule,
    DetailsEvaluationModule,
    CandidatureModule,
    SharedModule,
    AppRoutingModule,
    LoginModule,
    ReponseEvaluationModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
