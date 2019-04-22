import { Component, OnInit } from '@angular/core';
import { Storage }  from '@ionic/storage';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-visitordata',
  templateUrl: './visitordata.page.html',
  styleUrls: ['./visitordata.page.scss'],
})
export class VisitordataPage implements OnInit {

  constructor(private storage:Storage, private auth:AuthService) { }

  visitorname;

  ngOnInit() {
    this.storage.remove('name');
    this.storage.remove('hostName');
    this.storage.remove('hostid');
  }

  visitordatastore = () =>{
    this.storage.set("name",this.visitorname)
  }
  signout = () =>{
    this.auth.logout();
  }
}
