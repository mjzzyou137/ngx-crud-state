import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { take } from 'rxjs/operators';
import { CrudUtil } from 'ngx-crud-state';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  constructor(private crudUtil: CrudUtil, private router: Router) {}

  save(username, password) {
    const submitBody = {
      taiKhoan: username,
      matKhau: password
    };

    this.crudUtil
      .loadStateWithResolver({
        entityName: 'userLogin',
        requestOptions: {
          body: submitBody
        }
      })
      .pipe(take(1))
      .subscribe(
        result => {
          localStorage.setItem('userLogin', JSON.stringify(result));
          this.router.navigate(['/movies']);
          alert('Login is successful !');
        },
        error => alert(error.error)
      );
  }
}
