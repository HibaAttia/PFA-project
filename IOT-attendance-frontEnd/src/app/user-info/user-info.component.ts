import { Component, OnInit } from '@angular/core';
import { HttpClientService, UserInfo, Attendance} from '../service/http-client.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  message:string;
  id:number;

  attendances:Attendance[];

  newMessage() {
    this.httpClientService.changeMessage(0);


  }


  users:UserInfo[];
  userInfo:UserInfo;
 

  constructor(
    private httpClientService:HttpClientService
 
  ) { }

  ngOnInit() {
    this.httpClientService.currentMessage.subscribe(id => this.id = id)

    this.httpClientService.getUsers().subscribe(
      response =>{
        console.log(response);
        this.users= response;}
     );
  }

  deleteEmployee(user: UserInfo): void {
    this.httpClientService.deleteEmployee(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  viewAttendance(id: number){
    this.id= id;
    console.log('hiiiiii '+this.id);
    this.httpClientService.changeMessage(id);

   

}
}
