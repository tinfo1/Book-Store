import { Component } from '@angular/core';
import { LoginForm } from '../auth';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {Ro}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin = {
    email: '',
    password: ''
  };
  email: any;
  constructor(private authService: AuthService, private router: Router) { }
  submit(): void {
    this.authService.login(this.formLogin.email, this.formLogin.password).subscribe(
      (res) => {
        if (res.length > 0) {
          console.log('Đăng nhập thành công');
          alert('Đăng nhập thành công')
          if (this.formLogin.email === 'lehuynhduc587@gmail.com' && this.formLogin.password === '123456789') {
            this.router.navigateByUrl('')
          } else {
            this.router.navigateByUrl('');
          }
          // Xử lý đăng nhập thành công, ví dụ: chuyển hướng đến trang chính
        } else {
          console.log('Sai emai hoặc mật khẩu');
          alert('Sai emai hoặc mật khẩu');
          // Xử lý đăng nhập không thành công, ví dụ: hiển thị thông báo lỗi
        }
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    )
  }
}
