import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: Array<any>;

  constructor(private router: Router) { }


  companyFill() {
    this.data = [
      {
        id: 1,
        name: 'Right Click',
        picture: '../../assets/img/bg-close-person-hi.png',
        phone: '0877 125 425',
        mail: 'info@rightclick.bg',
      },
      {
        id: 2,
        name: 'Long Life',
        picture: '../../assets/img/bg-close-person-hi.png',
        phone: '0877 125 425',
        mail: 'info@rightclick.bg',
      },
      {
        id: 3,
        name: 'Alfa Vita',
        picture: '../../assets/img/bg-close-person-hi.png',
        phone: '0877 125 425',
        mail: 'info@rightclick.bg',
      }
    ];
  }

  appsFill(id:number){
    this.router.navigate(['/dashboard',id]);
  }


  ngOnInit(): void {
    this.companyFill();
  }

}
