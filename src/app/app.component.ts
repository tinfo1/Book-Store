import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab7';
  constructor(private authService: AuthService, private router: Router) { }
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated
  }
  isAuthenticatedAdmin(): boolean {
    return this.authService.isAuthenticatedAmin
  }
  logout():void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
