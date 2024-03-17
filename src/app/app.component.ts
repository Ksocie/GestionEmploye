import { Component, OnInit } from '@angular/core';
import { NavigationService } from "./services/navigation.service";
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'GestionEmploye';

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    //la logique pour se connecter et s'authentifier
    this.router.navigate(['/login']);
  }

  isUtilisateurConnecte(): boolean {
    return this.authService.getCandidatConnecte() !== null;
  }

  isLogin(): boolean {
    return this.router.url.includes('/login');
  }

  goToConnexion(): void {
    const utilisateurConnecte = this.authService.getCandidatConnecte();
    if (utilisateurConnecte) {
      localStorage.removeItem('utilisateurConnecte');
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(['/home']);
    }
  }
}

