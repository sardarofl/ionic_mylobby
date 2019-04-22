import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment'
import { Storage }  from '@ionic/storage';
import { Router } from '@angular/router';
import {GetdataService } from '../services/get/getdata.service';
@Component({
  selector: 'app-signin-success',
  templateUrl: './signin-success.page.html',
  styleUrls: ['./signin-success.page.scss'],
})
export class SigninSuccessPage implements OnInit {
  submitted:Boolean;
  constructor(private getDataService:GetdataService, private storage:Storage,private router: Router) { }
    url = environment.url;
  
  ngOnInit() {
    this.submitted = false;
    this.storage.get('siteID').then((siteID) => {
      this.submitted = true;
      console.log(siteID)
      this.getDataService.get(environment.url+"/api/employees/list?siteId="+siteID).subscribe((employeelist) => {
        console.log(employeelist) ;
        this.storage.set("employeelist",employeelist)
        this.submitted = false;
        this.router.navigate(['welcomevisitor'])
      },
    err=>{
      return false;
    });
    });

     
  }

}
