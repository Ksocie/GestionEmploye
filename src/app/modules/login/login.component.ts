import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {CandidatureService} from "../../services/candidature.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User = new User();

  constructor(private authService: AuthService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('utilisateurConnecte');
  }

  userLogin() : void{
    console.log(this.user);
    this.authService.loginUser(this.user).subscribe(
      user => {
        AuthService.updateUtilisateurConnecte(user);
        this.messageService.add(
          { severity: 'success', summary: 'Authentification réussie', detail: 'Redirection en cours...' }
        );
        // this.naviguerVersAccueil(user.code);
        this.naviguerVersHome();
      },
      error=> {
        this.messageService.add(
          { severity: 'error', summary: 'Authentification échouée', detail: 'Veuillez vérifier vos accès' }
        );
      })
  }

  naviguerVersAccueil(code: string) : void {
    this.router.navigate(['evaluation', code]);
  }

  naviguerVersHome() : void {
    this.router.navigate(['home']);
  }
}
