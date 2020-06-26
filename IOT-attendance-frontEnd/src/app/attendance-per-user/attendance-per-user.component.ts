import { Component, OnInit } from '@angular/core';
import { HttpClientService, Attendance, UserInfo } from '../service/http-client.service';


@Component({
  selector: 'app-attendance-per-user',
  templateUrl: './attendance-per-user.component.html',
  styleUrls: ['./attendance-per-user.component.css']
})
export class AttendancePerUserComponent implements OnInit {


  atts:Attendance[];
  user:UserInfo;
  
  constructor(
    private httpClientService: HttpClientService
  ) { }
  id:number;


  ngOnInit() {

    this.httpClientService.currentMessage.subscribe(id => this.id = id);
    this.httpClientService.viewAttendance(this.id)
    .subscribe( data => {
      console.log('hiiii' + data)
      this.atts = data;
    })

   }

  viewAttendance(id: BigInteger){
    console.log('hiiii' + this.httpClientService.viewAttendance(this.id))

    

  }




  }


