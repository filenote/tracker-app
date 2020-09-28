import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SimpleTrackerComponent } from './component/simple-tracker/simple-tracker.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'simple-tracker',
    component: SimpleTrackerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
