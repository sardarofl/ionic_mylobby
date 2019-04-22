import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage }  from '@ionic/storage';
import { Router } from '@angular/router';

import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-take-photo-for-visitor',
  templateUrl: './take-photo-for-visitor.page.html',
  styleUrls: ['./take-photo-for-visitor.page.scss'],
})
export class TakePhotoForVisitorPage implements OnInit {

  constructor(private camera: Camera, private cameraPreview: CameraPreview,private router:Router,private storage:Storage) { }
  counterDown:number;
  showCounter=  false;

  ngOnInit() {
    this.counterDown = 3;

  }
  timedCameraTake = () => {
    var timer = setInterval(() => {
      console.log(this.counterDown)
      this.counterDown = this.counterDown -1;
      if(this.counterDown == 1){
        clearInterval(timer);
        this.cameraPreview.takePicture({width:640, height:640, quality: 55}).then((ImageData) =>{
          let base64Image =  ImageData;
          this.storage.set("photoImage",base64Image);
          this.cameraPreview.stopCamera();
          this.router.navigate(['/confirm-visitor-signin']);
        })
      }
    }, 1500);
    // setTimeout(, 3000);
  }
  
  takePhoto() {
    this.showCounter = true;
    let options = {
      x: (window.screen.width/2)-150,
      y: (window.screen.height/2)-60,
      width: 300,
      height: 200,
      tapFocus: false,
      previewDrag: false,
      camera: this.cameraPreview.CAMERA_DIRECTION.FRONT
    };
    
    this.cameraPreview.startCamera(options);

    this.timedCameraTake();
    // const options: CameraOptions = {
    //   quality: 10,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE,
      
    // }

// this.cameraPreview.takePicture
//     this.camera.getPicture(options).then((imageData) => {
//       // imageData is either a base64 encoded string or a file URI
//       // If it's base64 (DATA_URL):
//       let base64Image =  imageData;
//       this.storage.set("photoImage",base64Image);
//       this.router.navigate(['/confirm-visitor-signin']);
    
//     }, (err) => {
//       // Handle error
//     });

    
  }


  
}
