import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['../app.component.css']
})
export class PricingComponent implements OnInit {

  data:Array<any>;
  private url:string = "pricing/pricing.json";

   constructor(private router: Router, private http:HttpClient) { 

   }


   plansFill(id:number){
      this.router.navigate(['/plans',id]);
   }
 
    infoFill(){
      // return this.http.get(this.url).map((response:Response)=>response.json());
      this.data = [
        {
          id: 1,
          style:'panel-info', 
          row1:'Стартиращ търговец', 
          row2:'0', 
          row3:'1 Потребител', 
          row4:'1 Склад', 
          row5:'5 Клиента', 
          row6:'20 Артикула', 
          row7:'50 Продажби на месец', 
          row8:'-' 
        },
        {
          id: 2, 
          style:'panel-success', 
          row1:'Малък бизнес', 
          row2:'5', 
          row3:'2 Потребител', 
          row4:'2 Склад', 
          row5:'20 Клиента', 
          row6:'50 Артикула', 
          row7:'400 Продажби на месец', 
          row8:'-' 
        },
        {
          id: 3, 
          style:'panel-primary', 
          row1:'Среден бизнес', 
          row2:'9', 
          row3:'5 Потребител', 
          row4:'3 Склад', 
          row5:'50 Клиента', 
          row6:'200 Артикула', 
          row7:'1000 Продажби на месец', 
          row8:'Интеграция с портали за пазаруване' 
        },
        {
          id: 4, 
          style:'panel-danger', 
          row1:'Неограничен', 
          row2:'19', 
          row3:'Неограничени', 
          row4:'Неограничени', 
          row5:'Неограничени', 
          row6:'Неограничени', 
          row7:'Неограничени', 
          row8:'Интеграция с портали за пазаруване' 
        }
      ];
    }

    


  ngOnInit(): void {
    this.infoFill();
  }
}
