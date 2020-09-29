import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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

    const dialogRef = this.dialog.open(LoginComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response && response.registering) {
        console.log('registration dialog should now be opened.');
        registrationRef = this.dialog.open(RegisterComponent, {
          width: '50%'
        })

        registrationRef.afterClosed().subscribe(response => {
          console.log('done registering');
        })
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
