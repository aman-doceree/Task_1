import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageComponent } from './manage/manage.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ShowdataComponent } from './showdata/showdata.component';
import {MatListModule} from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageComponent,
    ListComponent,
    CreateComponent,
    ShowdataComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
     MatRadioModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
