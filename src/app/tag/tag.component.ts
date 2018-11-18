import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit, OnChanges {

  @Input()
  tagName: string;

  tagDoc$: Observable<{[key: string]: any}>;

  constructor(private translateService: TranslateService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tagName && changes.tagName.currentValue) {
      this.tagDoc$ = this.translateService
        .get(`tags.${this.tagName}`);
    }
  }

  ngOnInit() {
    console.log(this.tagName);
  }

}
