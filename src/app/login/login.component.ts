import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private router: Router) {
   
  }
  
  ngOnInit() {}
  addPost() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/home']);
  }
}
