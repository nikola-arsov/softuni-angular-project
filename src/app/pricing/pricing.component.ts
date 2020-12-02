import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['../app.component.css']
})
export class PricingComponent implements OnInit {

  
  data:any;

  constructor(private router: Router, private http: HttpClient) {

  }


  plansFill(id: number) {
    this.router.navigate(['/plans', id]);
  }

 
  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/findPrices");
    response.subscribe((res)=> this.data= res);
  }
}
