import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate-service.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.getLanguagesForTranslate();
  }

}
