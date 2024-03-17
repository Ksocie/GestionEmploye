import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8192/axelor/ws/public';


  constructor(private httpClient: HttpClient) {
  }

  // registerUser(userDetails: User) {
  //   return this.http.post(`${this.baseUrl}/users`, userDetails);
  // }

  static updateUtilisateurConnecte(user: User): void {
    localStorage.removeItem('utilisateurConnecte');
    localStorage.setItem('utilisateurConnecte', JSON.stringify(user));
  }

  getCandidatConnecte(): User | null {
    const item = localStorage.getItem('utilisateurConnecte');
    if(item){
      return JSON.parse(item);
    }
    return null
  }

  loginUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}/users`, user);
    console.log(user);
  }
}
