import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginform: FormGroup;
    credentials= {
                    username: '',
      password: ''
                 };

  constructor(private  fb: FormBuilder, private  appServive: AppService, private router: Router) { }

  ngOnInit() {
    this.loginform
      = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }
  login() {
    console.log(this.credentials);
     this.appServive.authenticate(this.credentials, () => {
       this.router.navigateByUrl('/home');
     });
  }
  goBack( ) {
     this.credentials= {
       username: '',
       password: ''
     };
  }
}
