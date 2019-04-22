import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../services/get/getdata.service';
import {environment} from '../../environments/environment'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Storage }  from '@ionic/storage';


@Component({
  selector: 'app-choose-site',
  templateUrl: './choose-site.page.html',
  styleUrls: ['./choose-site.page.scss'],
})
export class ChooseSitePage implements OnInit {

  constructor(private auth:AuthService, private getDataService:GetdataService,private storage:Storage,private router:Router) { }
  sideID_array;
  submitted:Boolean;
  selectedSiteID;

  ngOnInit() {

    // this.getDataService.get(environment.url+'/api/sites/getList').subscribe((siteList)=>{
    //    console.log(siteList)
    // })
    this.submitted = false;
    this.storage.get('siteId_array').then((val) => {
      this.submitted = true;
      this.sideID_array =[];
      console.log(val);
      // this.sideID_array = val;
      for(let i=0; i<val.length ; i++)
      {
        this.getDataService.get(environment.url+'/api/sites/'+val[i]).subscribe((siteID)=>{
          console.log(siteID.site)
          this.sideID_array.push({"name":siteID.site.name,"id":siteID.site.id});
          if(i==val.length-1){
            this.submitted = false;
            
          }
        })
      }
     
    })
       


  }

  selectSite (){
    this.storage.set("siteID",this.selectedSiteID).then(()=>{
      this.router.navigate(['signin-success'])
    }); 
  

  }


  signout = () =>{
    this.auth.logout();
  }

}
