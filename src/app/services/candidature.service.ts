import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Candidature } from 'src/app/models/candidature.model';

@Injectable({
	providedIn: 'root'
})
export class CandidatureService {

	private url = 'http://localhost:8192/axelor/ws/public/candidature';

	constructor(private http: HttpClient) {
	}


	creer(candidature: Candidature): Observable<void> {
		return this.http.post<void>(`${this.url}`, candidature);
	}

	// isCandidatureExiste(referenceOffre: string, idCandidat: number): Observable<boolean> {
	// 	const params = new HttpParams()
	// 			.append('referenceOffre', referenceOffre)
	// 			.append('idCandidat', idCandidat.toString());
	// 	return this.http.get<boolean>(`${this.url}`, { params: params });
	// }
}
