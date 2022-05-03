import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {
    username: null,
    password: null
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  public login(): void {
    console.log(this.user);
  }

}
