import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component'; 
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
 
  // { path: 'manage', component: ListComponent },
  // { path: 'create', component: CreateComponent},
  // { path: 'showdata', component: ShowdataComponent },
  // { path: '', redirectTo: '/manage', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, 
  { path: '', redirectTo: '/signup', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
