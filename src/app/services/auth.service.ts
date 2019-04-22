import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {contentHeaders} from '../common/headers';
import { HttpModule, Http } from '@angular/http';
import { Router } from '@angular/router';


const TOKEN_KEY = 'access_token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);
  deviceidState = new BehaviorSubject(false);
 
  constructor(private http: Http, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController, private router:Router) {
    this.plt.ready().then(() => {
      this.checkToken();
      this.checkDeviceID();
    });
  }

  checkDeviceID(){
    return this.storage.get('siteID').then(siteID => {
      if(siteID){
        this.deviceidState.next(true);
        return true;
      }else{
        return false;
      }
    });

  }
 
  checkToken() {
    return this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
          console.log("check token")
          this.authenticationState.next(true);
          return true;
      }
        else{
          return false;
        }
          // let decoded = this.helper.decodeToken(token);
        // let isExpired = this.helper.isTokenExpired(token);
 
        // if (!isExpired) {
        //   this.user = decoded;
        // } else {
        //   this.storage.remove(TOKEN_KEY);
        // }
    });
  }
 
  register(credentials) {
    return this.http.post(`${this.url}/api/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  login(credentials) {
    
    let body = JSON.stringify({email:credentials.email, password:credentials.password});
    console.log(body)
     this.http.post(`${this.url}/api/users/login`,body, {headers:contentHeaders})
     .subscribe(
       session => {
         this.http.get(`${this.url}/api/users/`+ session.json().success.userId+ `?access_token=`+ session.json().success.id)
         .subscribe(
           (user:any) => {
             console.log(user);
             console.log(JSON.parse(user._body))
             //console.log(user.url.split("access_token=")[1])
            let bodyJSON = JSON.parse(user._body);
            let siteIDarray =[];
            for(let i=0; i<bodyJSON.user.hashAccess.length ; i++)
            {
              siteIDarray.push(bodyJSON.user.hashAccess[i].siteId)
            }
            console.log(siteIDarray);

            this.storage.set("siteId_array", siteIDarray);
            this.storage.set(TOKEN_KEY, user.url.split("access_token=")[1]);
            //this.user = this.helper.decodeToken(user.url.split("access_token=")[1]);
           this.authenticationState.next(true);
           }
         )
       }
     )
      // .pipe(
      //   tap(res => {
      //     this.storage.set(TOKEN_KEY, res['token']);
      //     this.user = this.helper.decodeToken(res['token']);
      //     this.authenticationState.next(true);
      //   }),
      //   catchError(e => {
      //     this.showAlert(e);
      //     throw new Error(e);
      //   })
      // );
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
      this.deviceidState.next(false);
    });
  }
 
  getSpecialData() {
    return this.http.get(`${this.url}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }
 
  isAuthenticated() {
    console.log("is authenticated")
    return this.authenticationState.value;
  }
 
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}