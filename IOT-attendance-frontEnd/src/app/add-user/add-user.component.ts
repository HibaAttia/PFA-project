import { Component, OnInit } from '@angular/core';
import { HttpClientService, UserInfo} from '../service/http-client.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: UserInfo = new UserInfo( "","","","","");

  constructor(private httpClientService: HttpClientService
    ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    console.log(this.user);
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };

}
