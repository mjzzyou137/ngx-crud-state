import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UsersPage } from './users/users.page';
import { UserPage } from './user/user.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage
  },
  {
    path: 'add',
    component: UserPage
  },
  {
    path: ':id/edit',
    component: UserPage
  }
];

@NgModule({
  declarations: [UsersPage, UserPage],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule]
})
export class UserModule {}
