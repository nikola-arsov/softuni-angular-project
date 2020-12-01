import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-apps',
  templateUrl: './dashboard-apps.component.html',
  styleUrls: ['./dashboard-apps.component.css']
})
export class DashboardAppsComponent implements OnInit {

  data:Array<any>;
  id:number;

  constructor(private route:ActivatedRoute) { }

  


  appsFill(){
    this.data =[
      {
        id: 1, 
        name:'Компания 1', 
        apps:
          [
            {
              id: 1,
              name: 'Склад', 
              expire:'12/07/2015', 
              start:'12/07/2014', 
              users:'5/10', 
              sales:'176/200', 
              products:'81/100',
            },
            {
              id: 2, 
              name: 'CRM', 
              expire:'12/07/2015', 
              start:'12/07/2014', 
              users:'5/10', 
              sales:'176/200', 
              products:'81/100',
            },
            {
              id: 3, 
              name: 'ERP',
              expire:'12/07/2015', 
              start:'12/07/2014', 
              users:'5/10', 
              sales:'176/200', 
              products:'81/100', 
            }
          ]
      },
      {
        id: 2, 
        name:'Компания 2', 
        apps:
          [
            {
              id: 1, 
              name: 'Склад',
              expire:'12/07/2015', 
              start:'12/07/2014', 
              users:'5/10', 
              sales:'176/200', 
              products:'81/100', 
            },
            {
              id: 2, 
              name: 'CRM',
              expire:'12/07/2015', 
              start:'12/07/2014', 
              users:'5/10', 
              sales:'176/200', 
              products:'81/100', 
            }
          ]
      }
    ];
  }

  ngOnInit(): void {
    this.appsFill();
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
