import * as R from 'ramda';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.authService.login(username, password).toPromise()
      .then((response: Response) => {
        const authorization = response.headers.get('Authorization');
        if (response.status === 200 && authorization) {
          const token = R.split('Bearer ', authorization)[1];
          localStorage.setItem('token', token);
          this.authService.isLoggedIn = true;
          this.dialogRef.close()
        }
      });
    }
  }

  openRegistration(): void {
    console.log('opening registration');
    this.dialogRef.close({registering: true});
  }

}
