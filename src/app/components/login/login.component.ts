import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(
    private readonly httpservice: HttpService,
    private readonly router: Router
  ) {
    this.user = new User();
  }

  ngOnInit(): void {}

  validateLogin() {
    if (this.user.username && this.user.password) {
      this.httpservice.validateLogin(this.user).subscribe(
        (result: any) => {
          console.log('result is ', result);
          if (result['status'] === 'success') {
            this.router.navigate(['/home']);
          } else {
            alert('Wrong username password');
          }
        },
        (error) => {
          console.log('error is ', error);
        }
      );
    } else {
      alert('enter user name and password');
    }
  }
}
