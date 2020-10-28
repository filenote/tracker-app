import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { constants } from 'src/app/common/constants';
import { LoginComponent } from '../login.component';

@Component({
  selector: 'app-login-trigger',
  templateUrl: './login-trigger.component.html',
  styleUrls: ['./login-trigger.component.scss']
})
export class LoginTriggerComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.openDialog();
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, constants.dialogOptions);
    dialogRef.afterClosed().subscribe(result => {
      const openRegistrationModal: boolean = !!result?.register;
      if (openRegistrationModal) {
        this.router.navigate(['../register'], { relativeTo: this.route });
      } else {
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    });
  }

}
