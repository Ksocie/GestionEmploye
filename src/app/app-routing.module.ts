import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/login/login.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
	{
    path: '',
		children: [
      {path: '', redirectTo: '/accueil', pathMatch: 'full'},
			{
				path: 'evaluation/:reference',
				loadChildren: () => import('./modules/details-evaluation/details-evaluation.module').then(m => m.DetailsEvaluationModule)
			},
      {
        path: 'candidature/:code',
        loadChildren: () => import('./modules/candidature/candidature.module').then(m => m.CandidatureModule)
      }
		]
	},
  {
    path: '**', redirectTo: ''
  },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
