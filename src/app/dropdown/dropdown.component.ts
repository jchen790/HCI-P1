import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TranslateService } from '../translate-service.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() isFrom: boolean = false;
  @Input() newLanguage: string = "";

  @Output() languageChosen = new EventEmitter<string>();

  dropdownText: string = "Choose a language";
  languages;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.languages = this.translateService.getLanguages();
  }

  selectLanguage(language: any)
  {
    this.languageChosen.emit(language.code);
    this.dropdownText = language.name;
  }

  ngOnChanges()
  {
    if(this.languages)
    {
      this.languages.forEach( (lang) => {
        if(lang.code == this.newLanguage)
        {
          this.dropdownText = lang.name;
          this.languageChosen.emit(lang.code);
        }
      });
    }

    // for(let lang in this.languages)
    // {
    //   if(lang.code == this.newLanguage)
    //   {
    //     this.dropdownText = lang.name;
    //     this.languageChosen.emit(lang.code);
    //     break;
    //   }
    // }
  }

}
