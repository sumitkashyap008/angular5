import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('phoneSelect') phoneSelect;
  constructor(private router:Router) { }
  ngOnInit() {
  }
  loggedOut() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }
}
