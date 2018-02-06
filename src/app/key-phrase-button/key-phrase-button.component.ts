import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key-phrase-button',
  templateUrl: './key-phrase-button.component.html',
  styleUrls: ['./key-phrase-button.component.css']
})
export class KeyPhraseButtonComponent implements OnInit {
  @Input() phraseChoice: number; 

  @Output() phraseClicked = new EventEmitter<string>();

  phrase: string = "";

  constructor() { }

  ngOnInit() {
    switch(this.phraseChoice)
    {
      case 1:
      this.phrase = "Go Left";
      break;

      case 2:
      this.phrase = "Go Right";
      break;

      case 3:
      this.phrase = "Go Straight";
      break;

      case 4:
      this.phrase = "Stop";
      break;
    }
  }

  onClick()
  {
    switch(this.phraseChoice)
    {
      case 1:
      this.phraseClicked.emit("Go Left");
      break;

      case 2:
      this.phraseClicked.emit("Go Right");
      break;

      case 3:
      this.phraseClicked.emit("Go Straight");
      break;

      case 4:
      this.phraseClicked.emit("Stop");
      break;
    }
  }

}
