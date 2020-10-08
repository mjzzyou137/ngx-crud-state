import { Component } from '@angular/core';

import { DataListComponent, CrudUtil } from 'ngx-crud-state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss']
})
export class UsersPage extends DataListComponent {
  get metadata() {
    return {
      entityName: 'user'
    };
  }

  constructor(protected crudUtil: CrudUtil, protected route: ActivatedRoute) {
    super(route, crudUtil);
  }

  afterDelete(response: any) {
    alert('Delete is successfully !');
  }
}
