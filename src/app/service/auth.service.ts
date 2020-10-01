import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<object> {
    const url = `${environment.dataserviceUrl}/login`;
    return this.http.post(url, {username, password}, {observe: 'response'});
  }

  register(username: string, password: string): Observable<object> {
    const url = `${environment.dataserviceUrl}/api/account/register`;
    return this.http.post(url, {username, password}, {observe: 'response'});
  }
}
