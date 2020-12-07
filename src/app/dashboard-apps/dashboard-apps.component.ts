import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard-apps',
  templateUrl: './dashboard-apps.component.html',
  styleUrls: ['./dashboard-apps.component.css']
})
export class DashboardAppsComponent implements OnInit {

  
  data:any;
  id: String;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }


  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/findCompanies");
    response.subscribe((res)=> this.data = res);
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
