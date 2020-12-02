import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild("map") mapElement;
  statu : any;
  map: any;
  constructor(private http: HttpClient) {}


  ngOnInit(){
    this.callApiStatus();
    // this.initMap();
  }

  callApiStatus(){ 
    var api_utl= "http://10.145.57.7/api/v2.0.0/status"
    this.http.get(api_utl).subscribe(data => {
      this.statu = data;
  }), err => {
    console.log(err);
  }


}



// initMap(){
//     let coords = new google.maps.LatLng(45,100);
//     let mapOptions: google.maps.MapOptions = {
//       center: coords,
//       zoom: 14,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     }

//   this.map = new google.maps.Map(this.mapElement.nativeElement,
//     mapOptions)

// }

}
