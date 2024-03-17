import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: any;

  constructor(private authService : AuthService) {
    this.name = this.authService.getCandidatConnecte()?.userLogin;
  }

  ngOnInit(): void {
  }

}
