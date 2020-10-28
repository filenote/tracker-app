import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { constants } from 'src/app/common/constants';
import { RegisterComponent } from '../register.component';

@Component({
  selector: 'app-register-trigger',
  templateUrl: './register-trigger.component.html',
  styleUrls: ['./register-trigger.component.scss']
})
export class RegisterTriggerComponent implements OnInit {

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
    const dialogRef = this.dialog.open(RegisterComponent, constants.dialogOptions);
    dialogRef.afterClosed().subscribe(result => {
      const openLoginModal: boolean = !!result?.login;
      if (openLoginModal) {
        this.router.navigate(['../login'], { relativeTo: this.route });
      } else {
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    });
  }
}
