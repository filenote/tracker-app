import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedIn: boolean = !!localStorage.getItem('token');
      const returnUrl: string = this.router.routerState.snapshot.url || '';
      if (!isLoggedIn) {
        this.router.navigate([returnUrl, 'login']);
        return false;
      }
      return this.auth.serverAuthentication()
      .then((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          this.router.navigate([returnUrl, 'login']);
        }
        return isAuthenticated;
      })
      .catch(() => {
        this.router.navigate([returnUrl, 'login']);
        return false;
      });
  }
}
