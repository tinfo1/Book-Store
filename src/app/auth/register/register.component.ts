import { Component } from '@angular/core';
import { RegisterForm } from '../auth';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    comfirm_password: ''
  }
  constructor(private authService: AuthService, private router: Router) { }
  submit(): void {
    if (this.form.password !== this.form.comfirm_password) {
      console.error('Mật khẩu và Nhập lại mật khẩu không khớp');
      return;
    }

    this.authService.register(this.form).subscribe(
      (res) => {
        console.log('Đăng ký thành công');
        this.router.navigateByUrl('login');
      },
      (error) => {
        console.error('Đăng ký thất bại', error);
      }
    );
  }
}
