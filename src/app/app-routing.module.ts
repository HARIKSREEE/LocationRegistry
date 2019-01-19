import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Login/login.component';
import { WelcomeComponenet } from './Welcome/welcome.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:WelcomeComponenet}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
