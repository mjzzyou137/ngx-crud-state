import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { CrudUtil, getState } from 'ngx-crud-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @getState({
    entityName: 'userLogin',
    withResolver: false
  })
  userLogin$: Observable<any>;

  active: boolean = false;

  constructor(private crudUtil: CrudUtil, private route: ActivatedRoute) {}

  ngOnInit() {
    if (!localStorage.getItem('userLogin')) {
      return;
    }

    this.crudUtil.setState({
      key: 'userLogin',
      value: JSON.parse(localStorage.getItem('userLogin'))
    });
  }

  logOut() {
    this.crudUtil.removeState('userLogin');
    localStorage.removeItem('userLogin');
    alert('Logout is successful !');
  }
}
