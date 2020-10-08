import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxCrudStateModule } from 'ngx-crud-state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './login/login.page';
import { metadata } from './metadata';

const baseUrl = 'https://5f4b8248ea007b0016b1d88b.mockapi.io/api/v1/';

@NgModule({
  declarations: [AppComponent, LoginPage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCrudStateModule.forRoot({
      metadata: metadata,
      rootApiUrl: 'https://5f4b8248ea007b0016b1d88b.mockapi.io/api/v1/'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
