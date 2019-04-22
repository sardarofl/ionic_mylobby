import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,

  ) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // console.log(this.authService.checkToken())
      // this.authService.checkToken().then((result)=>{
      //   console.log(result);
      //     if(result){
            
      //     }else{
      //       this.router.navigate(['login'])
      //       console.log("login failed")
      //     }
      // })
      
    

    this.authService.authenticationState.subscribe(state => {
      console.log(state)
      if(state){
        
        this.authService.deviceidState.subscribe(state =>{
          if(state){
            this.router.navigate(['signin-success'])
          }else{
            this.router.navigate(['choose-site'])
          }
        })
      }else{
        this.router.navigate(['login'])
      }
     
    
    })

  

    });
  }
}
