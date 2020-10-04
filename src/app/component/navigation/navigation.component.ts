import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { constants } from 'src/app/common/constants';
import { AuthService } from 'src/app/service/auth.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  loginDialog(): void {
    let registrationRef: MatDialogRef<RegisterComponent>;

    const dialogRef = this.dialog.open(LoginComponent, constants.dialogOptions);

    dialogRef.afterClosed().subscribe(response => {
      if (response && response.registering) {
        registrationRef = this.dialog.open(RegisterComponent, constants.dialogOptions);

        registrationRef.afterClosed().subscribe(registerResponse => {
        });
      }
    });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token != null;
  }

}
