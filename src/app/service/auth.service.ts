import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable, ɵɵelementContainerStart } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwt: JwtHelperService;
  constructor(
    private http: HttpClient
  ) { 
    this.jwt = new JwtHelperService();
  }

  login(username: string, password: string): Observable<object> {
    const url = `${environment.dataserviceUrl}/login`;
    return this.http.post(url, {username, password}, {observe: 'response'});
  }

  register(username: string, password: string): Observable<object> {
    const url = `${environment.dataserviceUrl}/api/account/register`;
    return this.http.post(url, {username, password}, {observe: 'response'});
  }

  serverAuthentication(authorization?: string): Promise<any> {
    const role = authorization || 'USER';
    const url = `${environment.dataserviceUrl}/api/account/auth`;
    return this.http.get(url, { params: { 
      role
    }}).toPromise();
    return this.http.get(url).toPromise();
  }

  /**
   * This should and will only be used for local display purposes, all guarded
   * requests will still have their token verified by server.
   * @param authority string value of authority to check for
   */
  hasAuthority(authority: string): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    const decoded = this.jwt.decodeToken(token);
    return decoded.authorities?.includes(`ROLE_${authority}`) || false;
  }
}
