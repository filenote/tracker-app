import * as R from 'ramda';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../service/auth.service';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  errorMessage = '';

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
        console.log(response);
        if (response.status === 200 && !!authorization) {
          const token = R.split('Bearer ', authorization)[1];
          localStorage.setItem('token', token);
          this.dialogRef.close();
        }
      })
      .catch((response: HttpErrorResponse) => {
        if (response.status === 403) {
          this.errorMessage = 'Username or password is incorrect.';
        }
      });
    }
  }

  openRegistration(): void {
    this.dialogRef.close({register: true});
  }

}
