import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Storage }  from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap'

@Injectable({
  providedIn: 'root'
})

export class GetdataService {
  authToken:any;
  headers= new Headers();

  constructor(private http:Http, private storage:Storage){  
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
  
    get(url: string) {
      let headers: Headers = this.getHeaders();
          return this.getApiToken().flatMap(data => {
              headers.append('Authorization', data.toString());
              return this.http.get(url, { headers : headers })
                  .map(res =>  res.json())
          });
      
  }

  get_employees_list(url: string,siteID) {
    let headers: Headers = this.getHeaders();
        return this.getApiToken().flatMap(data => {
            headers.append('Authorization', data.toString());
            //let siteId_number = parseInt(siteID);
            return this.http.get(url, { headers : headers })
                .map(res =>  res.json())
        });
    
}

  getAvatar(url,id, timestamp){
      return [url+"/api/employees/getAvatar/"+ id+  "?small=ture&access_token="+ this.authToken+ "&"+ timestamp];
  }


}

