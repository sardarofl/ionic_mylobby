import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomevisitor',
  templateUrl: './welcomevisitor.page.html',
  styleUrls: ['./welcomevisitor.page.scss'],
})
export class WelcomevisitorPage implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  signout = () =>{
    this.auth.logout();
  }

  startSigninProcess = () => {
    this.router.navigate(['visitordata'])
  }

}
