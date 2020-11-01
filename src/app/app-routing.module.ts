import { FeaturePageComponent } from './component/feature-page/feature-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SimpleTrackerComponent } from './component/simple-tracker/simple-tracker.component';
import { LoginTriggerComponent } from './component/login/login-trigger/login-trigger.component';
import { RegisterTriggerComponent } from './component/register/register-trigger/register-trigger.component';
import { AddSuggestionComponent } from './component/add-suggestion/add-suggestion.component';
import { AuthenticationGuard } from './guard/authentication.guard';
const authRoutes = [
  {
    path: 'login',
    component: LoginTriggerComponent
  },
  {
    path: 'register',
    component: RegisterTriggerComponent
  }
]

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      ...authRoutes
    ]
  },
  {
    path: 'simple-tracker',
    component: SimpleTrackerComponent,
    children: [
      ...authRoutes
    ]
  },
  {
    path: 'simple-tracker/new',
    component: AddSuggestionComponent,
    canActivate: [ AuthenticationGuard ]
  },
  {
    path: 'simple-tracker/:id',
    component: FeaturePageComponent,
    children: [
      ...authRoutes
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
