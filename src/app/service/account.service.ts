import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  public getAccountInformation(): Promise<any> {
    const url = `${environment.dataserviceUrl}/api/account`;
    return this.http.get(url).toPromise();
  }

  public getPublicAccountInformation(): any {

  }
}
