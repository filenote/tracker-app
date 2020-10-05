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
  })

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

    if (this.registerForm.valid) {
      this.authService.register(username, password)
        .subscribe((response: Response) => {
          if (response.status == 200) {
            this.dialogRef.close({});
            this.authService.login(username, password)
              .subscribe((response: Response) => {
                const token = response.headers.get('Authorization');
                if (response.status == 200 && !!token) {
                  localStorage.setItem('token', token);
                }
              })
          }
        })
    }
  }



}
