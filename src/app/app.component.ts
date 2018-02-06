import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TranslateButtonComponent } from './translate-button/translate-button.component';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Globals]
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

  // input box variables
  inputText: string = "";
  translatedText: string = Globals.TRANSLATED_TEXT;
  static globalTranslatedText: string = Globals.TRANSLATED_TEXT;
  @ViewChild(TranslateButtonComponent) translateButtonComponent;

  constructor(private globals: Globals){

  }

  addPhrase(phrase: string)
  {
    // adds phrase to translation box
    this.inputText = this.inputText + phrase;
  }

  // stores the languages being used and switches them if needed
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

  static addTranslatedText()
  {
    AppComponent.globalTranslatedText = Globals.TRANSLATED_TEXT;
  }

  updateTranslation()
  {
    this.translatedText = Globals.TRANSLATED_TEXT;
  }

  updateText()
  {
    this.translateButtonComponent.text = this.inputText;
  }
}
