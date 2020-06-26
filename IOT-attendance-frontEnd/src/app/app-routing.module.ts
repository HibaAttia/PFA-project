import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { AttendanceComponent } from './attendance/attendance.component';
import {AttendancePerUserComponent} from './attendance-per-user/attendance-per-user.component'



const routes: Routes = [
  { path :'', component: UserInfoComponent,canActivate:[AuthGaurdService] },
  { path:'addemployee', component: AddUserComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'attendance', component: AttendanceComponent,canActivate:[AuthGaurdService] },
  { path: 'attendancePerUser', component: AttendancePerUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
