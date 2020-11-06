import { AccountService } from './../../service/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent implements OnInit {

  accountInformation: any = {};

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.getAccountInformation()
      .then((response: Response) => {
        console.log(response);
        this.accountInformation = response;
      })
      .catch((response: any) => {
        console.log('something went wrong');
      });

  }

}
