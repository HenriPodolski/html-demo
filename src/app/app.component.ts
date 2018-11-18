import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('kids/de_DE');
    console.info('%c Implement age request and write to localstorage and set language file accordingly!', 'color: green;');
    this.translateService.use('kids/de_DE');
  }
}
