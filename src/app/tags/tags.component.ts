import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tagName$: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.tagName$ = this.activatedRoute.params.pipe(
      map((param) => {
        // default a tag
        if (!param || !param.name) {
          return 'a';
        }

        return param.name;
      })
    );
  }
}
