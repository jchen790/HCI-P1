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
    // getting the list of languages
    this.languages = this.translateService.getLanguages();
  }

  selectLanguage(language: any)
  {
    // selects the language for the dropdown, sets this language in the other components
    this.languageChosen.emit(language.code);
    this.dropdownText = language.name;
  }

  ngOnChanges()
  {
    // updates the dropdowns if the switch button is clicked
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
  }

}
