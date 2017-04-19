import { Component } from '@angular/core';

import { TranslateService } from 'ng2-translate'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private translate: TranslateService) {
    translate.addLangs(['nl', 'en', 'br'])
    translate.setDefaultLang('nl')
    translate.use('nl')
  }

  changeLanguage(lang: string) {
    this.translate.use(lang)
  }

  title = 'app works!';
}
