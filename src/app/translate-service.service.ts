import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TranslateService {

  constructor(private http: HttpClient) { }

  getLanguagesForTranslate()
  {
    // calls API for language codes

    const httpOptions = {
      headers: new HttpHeaders({'Ocp-Apim-Subscription-Key': '8e0ff3b833df4518b7987b92eb54037e'})
    };

    return this.http.get(
      'https://api.microsofttranslator.com/V2/Http.svc/GetLanguagesForTranslate',
      httpOptions
    ).subscribe();
  }

  getLanguageNames()
  {
    // calls API for friendly language names
  }

  detectLanguage()
  {
    // calls API to detect language that is inputted
  }

  translate()
  {
    // calls API to translate inputted text
  }

}
