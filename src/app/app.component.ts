import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // page text
  title: string = 'Where do I go?';
  description: string = `This simple 
    web app helps two people who don't 
    speak the same language give each 
    other directions.`;
  languagesTitle: string = 'Choose the languages:';
  inputTitle: string = 'What do you want to say?';
  fromLabel: string = 'From: ';
  toLabel: string = 'To: ';
  phraseLabel: string = 'Some helpful phrases:';
  translationTitle: string = 'Your translation:';

  // other variables
  fromLang: string = "";
  toLang: string = "";
  newFromLang: string = "";
  newToLang: string = "";

  addPhrase(phrase: string)
  {
    // adds phrase to translation box
  }

  setFromLang(code: string)
  {
    this.fromLang = code;
  }

  setToLang(code: string)
  {
    this.toLang = code;
  }

  switchLanguage()
  {
    let temp = this.toLang;
    this.toLang = this.fromLang;
    this.fromLang = temp;

    this.newFromLang = this.fromLang;
    this.newToLang = this.toLang;
  }
}
