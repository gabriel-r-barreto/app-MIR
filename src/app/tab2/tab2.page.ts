import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';



var count: true

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  statu2: any;
  mission: any;
  newPost : any;
  cond = true;
  velocity = false;

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
    await this.delay(5000);
      this.velocity = false;
      this.callApiStatus();
    }


  }


  callApiStatus(){ 
    var api_utl= "http://10.145.57.7/api/v2.0.0/status"
    this.http.get(api_utl).subscribe(data => {
      this.statu2 = data;
      if (this.statu2.velocity.angular != 0.0) {  
        this.velocity = true;
    }
    
  }), err => {
    console.log(err);
  }

  if (this.velocity == true){
      this.repeat();
  }

  }



} 
