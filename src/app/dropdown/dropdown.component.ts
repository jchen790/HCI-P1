import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '../translate-service.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() isFrom: boolean = false;

  @Output() languageChosen = new EventEmitter<string>();

  dropdownText: string = "Choose a language";
  languages;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.languages = this.translateService.getLanguages();
    // testing this
    // this.translateService.translate();
  }

  selectLanguage(language: any)
  {
    this.languageChosen.emit(language.code);
    this.dropdownText = language.name;
  }

}
