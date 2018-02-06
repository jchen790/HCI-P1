import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '../translate-service.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-translate-button',
  templateUrl: './translate-button.component.html',
  styleUrls: ['./translate-button.component.css']
})
export class TranslateButtonComponent implements OnInit {
  @Input() toLang: string = "";
  @Input() fromLang: string = "";
  @Input() text: string = "";

  @Output() clicked = new EventEmitter();
  @Output() translatedText = new EventEmitter<string>();
  @Output() updateTranslation = new EventEmitter();

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  onClick()
  {
    // get updated text from app
    this.clicked.emit();
    // translate the text
    let output: any = this.translateService.translate(this.fromLang, this.toLang, this.text);
    let timer = Observable.timer(3000,1000);
    timer.subscribe(t=>this.updateTranslation.emit());
  }

}
