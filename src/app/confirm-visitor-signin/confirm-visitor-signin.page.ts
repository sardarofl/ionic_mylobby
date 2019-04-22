import { Component, OnInit } from '@angular/core';
import { Storage }  from '@ionic/storage';
import { PostdataService } from '../services/post/postdata.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
// declare var cordova;
// import * as ionicprinter from '../../../plugins/com.threescreens.cordova.plugin.brotherPrinter/www/printer';
declare var cordova;

@Component({
  selector: 'app-confirm-visitor-signin',
  templateUrl: './confirm-visitor-signin.page.html',
  styleUrls: ['./confirm-visitor-signin.page.scss'],
})
export class ConfirmVisitorSigninPage implements OnInit {
  visitor_name:any;
  host_name:any;
  host_id:any;
  files: any[];
  image;
  submitted:Boolean;
  defaultimage = false;
  printerData;
  printstatus;
  base64imageData;
  constructor(private storage:Storage,
    //  private printer:Printer,
     private router:Router,private DomSanitizer: DomSanitizer,private postData:PostdataService) {
  
   }

  ngOnInit() {
    this.defaultimage = false;
    this.storage.get('name').then((val) => {
      this.visitor_name = val;
    })
    this.storage.get('hostName').then((val) => {
      this.host_name = val;
    })
    this.storage.get('hostid').then((val) => {
      this.host_id = val;
    })
    this.storage.get('photoImage').then((val) => {
      let base64Data=val;
      this.base64imageData = val;
      this.image= "data:image/jpeg;base64,"+base64Data;
     
    })
    // .then((val ) =>{
    //   if(typeof val === 'undefined')
    //   {
    //     this.defaultimage = true;
    //   }
    // })
    cordova.plugins.brotherPrinter.findPrinters((data)=>{
      console.log("Success");
      this.printerData = data;
      console.log(data)
  },(err)=>{
      console.log("Error");
      this.printerData = err;
      console.log(err)
  });

    this.submitted= false;
    //
    this.storage.remove('photoImage');
 
  }


  onFileChange(event){
    this.files = event.target.files;
    console.log(event);
  }
  visitorCompleteSignIn() {
    // let files = this.elem.nativeElement.querySelector('#fileinput').files; 
    // this.submitted= true;
    console.log(this.files)
    let body= new FormData();
    
    body.append('name',this.visitor_name);
    console.log(this.host_id)
    body.append('employeeId', this.host_id);

    // this.image = this.image.replace("data:image/jpeg;base64,",'');
    body.append('file',this.b64toBlob(this.image, 'image/jpeg'),"wn")

    // cordova.plugins.printer.print('<b>Hello Cordova!</b>');
    this.printstatus = "lets go"
    this.printFromBrotherPrinter(this.base64imageData,"1");

    //   cordova.plugins.brotherPrinter.findPrinters((data)=>{
    //     console.log("Success");
    //     this.printerData = data;
    //     this.printstatus = "get outss"
    //     console.log(data)
        
    //     var printer = {
    //       "model": data[0].model,
    //       "port": 'NET',
    //       "modelName": data[0].modelName,
    //       "ipAddress": data[0].ipAddress,
    //       "macAddress": data[0].macAddress,
    //       "nodeName": data[0].nodeName,
    //       "location": ""
    //     };
    // cordova.plugins.brotherPrinter.setPrinter(printer, function (success) {
    //   this.printstatus = "taste of success " + success;
    //   var dataArray = {
    //     "base64String": this.image
    //   };
    //   this.printstatus = "The taste of success " + success;
    //   cordova.plugins.brotherPrinter.printViaSDK(dataArray, function (printResult) {
    //         //var printResult = callback;
    //         if (printResult == null) {
    //           // iOS result
    //         }
    //         else {
    //           if (printResult.result != null && printResult.result !== undefined) {
    //             if (printResult.result == 'Succeeded') {
    //               // Print Success\
    //               this.printstatus ="I think succed "+printResult.result;
    //               this.postData.signInVisitor(body).subscribe((response) => {
    //                 console.log(response);
    //                 this.submitted= false;
    //                 // this.router.navigate(['/welcomevisitor']);
    //               }, (err) => {
    //                 this.submitted= false;
    //                 console.log(err);
    //                 // this.router.navigate(['/welcomevisitor']);
    //               })
    //             }
    //             else {
                  
    //                 this.printstatus ="Maybe it failed "+printResult.result;
    //             }
    //           }
    //           else {
    //             this.printstatus = "i'm not sure"
    //           }
    //         }
    //         this.printstatus = "nothing worked i guess"
    //       });
    //     }, function (error) {
    //       this.printstatus = "Error actually "+error;
    //     });
    // },(err)=>{
    //   this.printstatus = "didn't even find printer "+ err;
    //     console.log("Error");
    //     this.printerData = err;
    //     console.log(err)
    // });
    // var printer = {
    //   "model": "QL_820NWB",
    //   "port": 'NET',
    //   "modelName": "Brother QL-820NWB",
    //   "ipAddress": "192.168.2.215",
    //   "macAddress": "54:13:79:C4:F5:EB",
    //   "nodeName": "BRW541379C4F5EB",
    //   "location": "",
    //   "paperLabelName":"W62"
    // };
   
   
    // this.printer.isAvailable().then(onSuccess=>{
    //   console.log(onSuccess);
    // }, onError =>{
    //   console.log(onError);
    // });
    
      // this.printer.pick().then((success) => {
      //   console.log(success)
      // }, (err) => {
      // console.log( err);
      // });

    // this.BrotherPrinter.findNetworkPrinters((data)=>{
    //     console.log("Success");
    //     console.log(data)
    // },(err)=>{
    //     console.log("Error");
    //     console.log(err)
    // });


  
  }

  printFromBrotherPrinter(base64String,noOfPrintLocal) {
    let that = this;
    
    return new Promise((resolve, reject) => {
      this.printstatus = "get outss"
      cordova.plugins.brotherPrinter.findPrinters((success) => {
        this.printstatus = "success i guess"
        that.printerData = success;
        if (that.printerData.length > 0) {
          this.printstatus = "detected printers"
          var printer = {
            "model": that.printerData[0].model,
            "port": 'NET',
            "modelName": that.printerData[0].modelName,
            "ipAddress": that.printerData[0].ipAddress,
            "macAddress": that.printerData[0].macAddress,
            "nodeName": that.printerData[0].nodeName,
            "location": "",
            "paperLabelName":"W62"
          };
          this.printstatus = "preset printer"
          cordova.plugins.brotherPrinter.setPrinter(printer,  (success) =>{
            // var dataArray = {
            //   "base64String": base64String
            // };
            var dataArray = {
              "base64String": base64String,
              "numberOfCopies": noOfPrintLocal
            };
            this.printstatus = "set printer"
           this.printstatus = JSON.stringify(success);
            cordova.plugins.brotherPrinter.printViaSDK(dataArray,  (printResult) => {
              this.printstatus = "do the printing"
              //var printResult = callback;
              if (printResult == null) {
                // iOS result
                resolve(1);
              }
              else {
                if (printResult.result != null && printResult.result !== undefined) {
                  if (printResult.result == 'Succeeded') {
                    // Print Success
                    resolve(1);
                  }
                  else {
                    resolve(2);
                  }
                }
                else {
                  resolve(2);
                }
              }
            });
          },  (error) => {
            this.printstatus = "error happened on setting printer"
            reject(2);
          });
        } else {
          console.log("No printer found");
          reject(2);
        }
      }, (error) => {
        console.log("Find Printer Error: " + JSON.stringify(error));
        reject(2);
      });
    });
  }
  b64toBlob(b64Data, contentType) {
    b64Data = b64Data.replace("data:image/jpeg;base64,",'')
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

}
