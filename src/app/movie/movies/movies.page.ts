import { Component, OnInit } from '@angular/core';

import { getItems, CrudUtil } from 'ngx-crud-state';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss']
})
export class MoviesPage implements OnInit {
  @getItems({
    entityName: 'movie'
  })
  movies$: Observable<any>;

  ngOnInit() {}

  constructor(private crudUtil: CrudUtil, private route: ActivatedRoute) {}
}
