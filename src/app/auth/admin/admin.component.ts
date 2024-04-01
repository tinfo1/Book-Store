import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private authService: AuthService, private router: Router) { }
  isAuthenticatedAdmin(): boolean {
    return this.authService.isAuthenticatedAmin
  }
  logout():void {
    this.authService.logout();
    this.router.navigateByUrl('');
  } 
}
