import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ShowdataComponent } from './showdata/showdata.component';

const routes: Routes = [
 
  { path: 'manage', component: ListComponent },
  { path: 'create', component: CreateComponent},
  { path: 'showdata', component: ShowdataComponent },
  { path: '', redirectTo: '/manage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
