import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username === 'test' && this.password === 'Ayi+2020') {
      this.router.navigate(['usuarios']);
    } else {
      alert('los datos ingresados son incorrectos');
    }
  }

}
