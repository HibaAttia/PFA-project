import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Time } from '@angular/common';
import { BehaviorSubject } from 'rxjs';


export class UserInfo{
  public userId:BigInteger;
  public name:string;
  public email:string;
  public password:string;
  public nfcTagID:string;
  public salary:string;
  constructor(
     name:string,
     email:string,
    password:string,
     nfcTagID:string,
     salary:string,

  ) {}
  
}

export class Attendance {
  constructor(
    
    public id:BigInteger,
    private name : string ,
    private nfcTagID : string,
    private day:Date,
    private entryTime :Time,
    private leaveTime : Time,
  ) {}
  
}

export class Attuser{
  constructor(
    private name : string ,
    private day:Date,
    private entryTime :Time,
    private leaveTime : Time,
  ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
   username:string='hiba'
   password:string='password'
  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getUsers()
  {
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.get<UserInfo[]>('http://localhost:8080/getusers', {headers});
  }

  getAttendance()
  {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.get<Attendance[]>('http://localhost:8080/card', {headers});
  }

  public deleteEmployee(user) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.delete<UserInfo>("http://localhost:8080/employees" + "/"+ user.userId , {headers});
  }

  public createEmployee(user) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.post<UserInfo>("http://localhost:8080/employees", user , {headers});
  }

  public viewAttendance(id) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.get<Attendance[]>("http://localhost:8080/card/att?id="+id, {headers});
  }

  /*public findUserById(id) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.get<UserInfo[]>("http://localhost:8080/id?id="+id, {headers});
  }*/


  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();
  changeMessage(id: number) {
    this.messageSource.next(id)
  }


}