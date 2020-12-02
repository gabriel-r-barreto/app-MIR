import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  statu: any;
  bateryFull: any;
  bateryHalf: any;
  bateryLow: any;
  constructor(private http: HttpClient) {}



  ngOnInit(){
    this.callApiStatus();
  }



  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

    async repeat(){
    const rep = true
    while (rep == true) {
    await this.delay(7000);
      this.callApiStatus();
    }
  }

  callApiStatus(){ 
  var api_utl= "http://10.145.57.7/api/v2.0.0/status"
  this.http.get(api_utl).subscribe(data => {
    this.statu = data;
    this.statu.battery_percentage = Number.parseInt(this.statu.battery_percentage);


    if (this.statu.battery_percentage > 50 || this.statu.battery_percentage == 100) {
      this.bateryFull = true;
      this.bateryHalf = false;
      this.bateryLow = false;
    }

    if (this.statu.battery_percentage <= 50){
      this.bateryHalf = true;
      this.bateryFull = false;
      this.bateryLow = false;

    }
  
    if (this.statu.battery_percentage <= 20){
      this.bateryLow = true;
      this.bateryHalf = false;
      this.bateryFull = false;
    }

 }), err => {
    console.log(err);
  }
 

  }
}
