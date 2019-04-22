import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Storage }  from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../../environments/environment'
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  authToken:any;
  headers= new Headers();
  url = environment.url;

  constructor(private http:Http, private storage:Storage) {
    this.storage.get('access_token').then((val) => {
      this.authToken = val;
      
    })
   }

  
  getApiToken(): Observable<Headers> {
    return Observable.fromPromise(this.storage.get('access_token'));
  }

  getHeaders(): Headers {
    return new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      });
  }

  signInVisitor(body){
    let _url:string = this.url+"/api/visitors/signin";
    let headers = new Headers();
    console.log(this.authToken.toString())
    headers.append('Authorization',this.authToken.toString());
    console.log(headers)
 
    return this.http.post(_url,body,{headers:headers})
    .catch(this._errorHandler);
  }

  _errorHandler(error: Response){
    console.error('Error occured: ' +error);
    return Observable.throw(error||'some error on server occured');
  }
  

}
