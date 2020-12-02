import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor(router: Router) {
  }


  ngOnInit(): void {
  }

}
