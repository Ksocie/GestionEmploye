import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class NavigationService {

	constructor(private router: Router) {
	}

	public async goTo(route: string): Promise<void> {
		await this.router.navigate([route]);
	}

	goToHome(): void {
		this.goTo('/');
	}

	getCurrentUrl(): string {
		return this.router.url;
	}
}
