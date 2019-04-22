import { Component, OnInit } from '@angular/core';
import {GetdataService } from '../services/get/getdata.service';
import {environment} from '../../environments/environment'
import { Router } from '@angular/router';
import { Storage }  from '@ionic/storage';
@Component({
  selector: 'app-selecthost',
  templateUrl: './selecthost.page.html',
  styleUrls: ['./selecthost.page.scss'],
})
export class SelecthostPage implements OnInit {

  timestamp = 0;

  constructor(private router:Router, private storage:Storage, private getDatService:GetdataService) { 
    this.timestamp = new Date().getTime();
  }
  url = environment.url;

  employeelist;

  ngOnInit() {
    this.storage.get('employeelist').then((val) => {
      console.log(val);
      this.employeelist = val.employees;
    })
   
  //   this.getDatService.get(`${this.url}/api/employees/list`).subscribe((employeelist) => {
  //     console.log(employeelist) ;
  //     this.employeelist = employeelist.employees;
  //   },
  // err=>{
  //   return false;
  // });
    
  }

  getAvatarURL(id){
    return this.getDatService.getAvatar(this.url,id,this.timestamp)
  }

  selectedHost(id, name){
    this.storage.set("hostid",id)
    this.storage.set("hostName", name)
    this.router.navigate(['/take-photo-for-visitor']);
  }
}



