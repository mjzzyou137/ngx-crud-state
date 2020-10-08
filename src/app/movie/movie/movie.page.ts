import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { getItem, CrudUtil } from 'ngx-crud-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss']
})
export class MoviePage {
  @getItem({
    entityName: 'movie',
    primaryKey: 'maPhim'
  })
  movie$: Observable<any>;

  constructor(private crudUtil: CrudUtil, private route: ActivatedRoute) {}
}
