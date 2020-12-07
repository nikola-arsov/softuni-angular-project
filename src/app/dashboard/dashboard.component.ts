import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  data:any;

  constructor(private router: Router, private http: HttpClient) {
  }


  appsFill(id: number) {
    this.router.navigate(['/dashboard', id]);
  }


  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/findDashboardApps");
    response.subscribe((res)=> this.data= res);
  }

}
