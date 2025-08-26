import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FilterComponent } from './filter/filter.component';
import { DataComponent } from './filter/data/data.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
    {
    path: 'filter', component: FilterComponent,
    children: [
      {  path: 'data', component: DataComponent }  
    ]
  },
  { path: 'manage', component: ListComponent },
  { path: 'create', component: CreateComponent},
  { path: 'showdata', component: ShowdataComponent },
  { path: 'signup', component: SignupComponent }
  //{ path: '', redirectTo: '/manage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
