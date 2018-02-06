import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class TranslateService {
  private authToken;
  private languages = [
    { "af": "Afrikaans" },
    { "ar": "Arabic" },
    { "bn": "Bangla" },
    { "bs-Latn": "Bosnian (Latin)" },
    { "bg": "Bulgarian" },
    { "ca": "Catalan" },
    { "zh-CHS": "Chinese Simplified" },
    { "zh-CHT": "Chinese Traditional" },
    { "yue": "Cantonese (Traditional)" },
    { "hr": "Croatian" },
    { "cs": "Czech" },
    { "da": "Danish" },
    { "nl": "Dutch" },
    { "en": "English" },
    { "et": "Estonian" },
    { "fj": "Fijian" },
    { "fil": "Filipino" },
    { "fi": "Finnish" },
    { "fr": "French" },
    { "de": " German" },
    { "el": "Greek" },
    { "ht": "Haitian Creole" },
    { "he": "Hebrew" },
    { "hi": "Hindi" },
    { "mww": "Hmong Daw" },
    { "hu": "Hungarian" },
    { "id": "Indonesian" },
    { "it": "Italian" },
    { "ja": "Japanese" },
    { "sw": "Kiswahili" },
    { "tlh": "Klingon" },
    { "tlh-Qaak": "Klingon (pIqaD)" },
    { "ko": "Korean" },
    { "lv": " Latvian" },
    { "lt": "Lithuanian" },
    { "mg": "Malagasy" },
    { "ms": "Malay" },
    { "mt": "Maltese" },
    { "yua": "Yucatec Maya" },
    { "no": "Norwegian Bokmål" },
    { "otq": "Querétaro Otomi" },
    { "fa": "Persian" },
    { "pl": "Polish" },
    { "pt": "Portuguese" },
    { "ro": "Romanian" },
    { "ru": "Russian" },
    { "sm": "Samoan" },
    { "sr-Cyrl": "Serbian (Cyrillic)" },
    { "sr-Latn": "Serbian (Latin)" },
    { "sk": "Slovak" },
    { "sl": "Slovenian" },
    { "es": "Spanish" },
    { "sv": "Swedish" },
    { "ty": " Tahitian" },
    { "ta": "Tamil" },
    { "th": "Thai" },
    { "to": "Tongan" },
    { "tr": "Turkish" },
    { "uk": "Ukranian" },
    { "ur": "Urdu" },
    { "vi": " Vietnamese" },
    { "cy": "Welsh" }
  ];

  constructor(private http: HttpClient) { }

  getLanguages()
  {
    return this.languages;
  }

  // getAuthToken()
  // {
  //   return this.http.post(
  //     'https://api.cognitive.microsoft.com/sts/v1.0/issueToken',
  //     {
  //       // no body for this call
  //     },
  //     {
  //       headers:
  //       {
  //         'Ocp-Apim-Subscription-Key': '8e0ff3b833df4518b7987b92eb54037e'
  //       },
  //       'responseType': 'text'
  //     }
  //   ).subscribe(
  //     (token) => {
  //       this.authToken = token;
  //     },
  //     err => {
  //       console.log("Error in getting the token");
  //     },
  //     () => {
  //       this.getLanguagesForTranslate();
  //     }
  //   );
  // }

  // getLanguagesForTranslate()
  // {
  //   const httpOptions = {
  //     params: new HttpParams().set('appid', 'Bearer ' + this.authToken),
  //     'responseType': 'blob'
  //   };

  //   return this.http.get(
  //     'https://api.microsofttranslator.com/V2/Http.svc/GetLanguagesForTranslate',
  //     httpOptions
  //   ).subscribe(
  //     (langList) => {
  //       this.languageCodeXml = langList;
  //       // parse the xml to fill code list 
  //     },
  //     err => {
  //       console.log("Error in getting the language codes")
  //     },
  //     () => {
  //       this.getLanguageNames();
  //     }
  //   );
  // }

  // getLanguageNames()
  // {
  //   // calls API for friendly language names
  //   let params = new HttpParams().set('locale', 'en')
  //       .set('appid', 'Bearer ' + this.authToken);

  //   return this.http.post(
  //     'https://api.microsofttranslator.com/V2/Http.svc/GetLanguageNames',
  //     this.languageCodeXml,
  //     {
  //       headers:
  //       {
  //         'Content-Type': 'text/plain'
  //       },
  //       params,
  //       'responseType': 'blob'
  //     }
  //   ).subscribe(
  //     (langList) => {
  //       // parse it into language list
  //     },
  //     err => {
  //       console.log("Error in getting the language names")
  //     },
  //     () => {
  //       // something
  //     }
  //   )
  // }

  translate()
  {
    // calls API to translate inputted text
    this.http.post(
      'https://api.cognitive.microsoft.com/sts/v1.0/issueToken',
      {
        // no body for this call
      },
      {
        headers:
        {
          'Ocp-Apim-Subscription-Key': '8e0ff3b833df4518b7987b92eb54037e'
        },
        'responseType': 'text'
      }
    ).subscribe(
      (token) => {
        this.authToken = token;
      },
      err => {
        console.log("Error in getting the token");
      },
      () => {
        let params = new HttpParams().set('to', 'fr')
        .set('text', 'Hello world, how are you today?')
        .set('from', 'en')
        .set('appid', 'Bearer ' + this.authToken);

        return this.http.get(
          'https://api.microsofttranslator.com/V2/Http.svc/Translate',
          {
            params,
            'responseType': 'blob'
          }
        ).subscribe();
      }
    );

    
  }

}
