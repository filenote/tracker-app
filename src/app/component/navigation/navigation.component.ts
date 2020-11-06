import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  loginDialog(): void {
    this.router.navigate([this.router.url, 'login']);
  }

  goToAccountInformation(): void {
    this.router.navigate(['/account']);
  }

  logout(): void {
    this.router.navigate(['']);
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
