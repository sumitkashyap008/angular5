import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css']
})
export class TableListComponent implements OnInit {
  @ViewChild('phoneSelect') phoneSelect;
  constructor(private router:Router) { }
  ngOnInit() {
  }
  loggedOut() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }
}
