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
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule)
      },
			{
				path: 'details-evaluation/:code/:reference',
				loadChildren: () => import('./modules/details-evaluation/details-evaluation.module').then(m => m.DetailsEvaluationModule)
			},
      {
        path: 'evaluation/:code',
        loadChildren: () => import('./modules/evaluation/evaluation-routing.module').then(m => m.EvaluationRoutingModule)
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
