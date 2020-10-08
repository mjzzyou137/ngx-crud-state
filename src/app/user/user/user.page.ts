import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseCrudComponent, CrudUtil } from 'ngx-crud-state';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPage extends BaseCrudComponent {
  get metadata() {
    return {
      entityName: 'user'
    };
  }

  constructor(
    protected crudUti: CrudUtil,
    protected route: ActivatedRoute,
    private router: Router
  ) {
    super(route, crudUti);
  }

  afterSave(result: any) {
    if (!result) {
      return;
    }

    let action: string = this.isEdit ? 'Update' : 'Create';

    alert(`${action} user is successfully !`);
    this.router.navigate(['/users']);
  }

  initForm(entity: any): void {
    this.entityForm = {
      name: entity.name,
      gender: entity.gender,
      phone: entity.phone,
      email: entity.email
    };
  }
}
