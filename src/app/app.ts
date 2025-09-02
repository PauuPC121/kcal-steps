import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CalculatorComponent } from './components/calculator/calculator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TranslateModule, CalculatorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  year = new Date().getFullYear();

  constructor(private translate: TranslateService) {
    translate.addLangs(['en','es','fr','de','it','pt','ru','zh']);
    translate.setDefaultLang('en');

    const browser = translate.getBrowserLang();
    translate.use(browser && translate.getLangs().includes(browser) ? browser : 'en');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
