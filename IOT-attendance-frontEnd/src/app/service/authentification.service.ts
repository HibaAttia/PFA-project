import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class UserLogin{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient:HttpClient) { }


  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<UserLogin>('http://localhost:8080/validateLogin',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
