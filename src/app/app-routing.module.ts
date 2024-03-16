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
      // {path: '', redirectTo: '/accueil/:id', pathMatch: 'full'},
			{
				path: 'details-evaluation/:code/:reference',
				loadChildren: () => import('./modules/details-evaluation/details-evaluation.module').then(m => m.DetailsEvaluationModule)
			},
      {
        path: 'accueil/:code',
        loadChildren: () => import('./modules/accueil/accueil-routing.module').then(m => m.AccueilRoutingModule)
      },
      {
        path: 'candidature/:code',
        loadChildren: () => import('./modules/candidature/candidature.module').then(m => m.CandidatureModule)
      },
      {
        path: 'reponse/:reference',
        loadChildren: () => import('./modules/reponse-evaluation/reponse-evaluation.module').then(m => m.ReponseEvaluationModule)
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
