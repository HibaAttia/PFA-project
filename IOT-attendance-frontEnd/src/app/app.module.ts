import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendancePerUserComponent } from './attendance-per-user/attendance-per-user.component';





@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    AddUserComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    AttendanceComponent,
    AttendancePerUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
