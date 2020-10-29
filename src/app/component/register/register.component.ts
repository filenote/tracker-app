import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { every, map } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.registerForm.valid) {
      return;
    }

    const username = this.registerForm.get('username').value;
    const password = this.registerForm.get('password').value;

    this.authService.register(username, password).toPromise()
      .then((response: Response) => {
        if (response.status === 200) {
          this.dialogRef.close();
          this.authService.login(username, password).toPromise()
            .then((loginResponse: Response) => {
              const token = response.headers.get('Authorization');
              if (response.status === 200 && !!token) {
                localStorage.setItem('token', token);
              }
            });
        }
      })
      .catch((response: HttpErrorResponse) => {
        if (response.status === 409) {
          this.errorMessage = 'Username already exists.';
        }
      });
  }

  openLogin(): void {
    this.dialogRef.close({login: true});
  }


}
