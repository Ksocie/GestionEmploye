import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import {CardModule} from "primeng/card";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TabViewModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ProgressSpinnerModule,
    ToastModule,
    LoginRoutingModule,
    FormsModule,
    CardModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    MessageService
  ]
})
export class LoginModule {
}
