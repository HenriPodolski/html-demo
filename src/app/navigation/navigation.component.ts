import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  tagDocs$: Observable<{[key: string]: any}>;

  tagName$: Observable<string>;

  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.tagDocs$ = this.translateService.get(`tags`);

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
