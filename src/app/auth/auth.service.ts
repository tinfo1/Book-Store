import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from './auth';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { tap } from 'rxjs/operators'; // Thêm import này
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false
  isAuthenticatedAmin: boolean = false
  isloading: boolean = false
  constructor(private http: HttpClient) { }
  // protected LoginForm :LoginForm[] = []
  private URL = 'http://localhost:3000/user';

  login(email: string, password: string): Observable<any> {
    return this.http.get<string>(`${this.URL}?email=${email}&password=${password}`).pipe(
      tap(res => {
        if (res.length > 0) {
          this.isAuthenticated = true; // Đã xác thực thành công
          if(email === 'lehuynhduc587@gmail.com' && password === '123456789') {
            this.isAuthenticatedAmin = true
          }
        }
      })
    )
  }
  register(form: RegisterForm) {
    const { comfirm_password, ...userData } = form;
    return this.http.post<any>(`${this.URL}`, userData);
  }
  logout() {
    this.isAuthenticatedAmin = false
    this.isAuthenticated = false
  }
}


