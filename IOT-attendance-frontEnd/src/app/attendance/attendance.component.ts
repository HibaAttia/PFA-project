import { Component, OnInit } from '@angular/core';
import { HttpClientService, Attendance} from '../service/http-client.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  attendances:Attendance[];

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getAttendance().subscribe(
      response =>{
        console.log(response)
        this.attendances= response;
      }
     );
  }

}
