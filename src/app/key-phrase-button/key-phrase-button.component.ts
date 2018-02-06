import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-key-phrase-button',
  templateUrl: './key-phrase-button.component.html',
  styleUrls: ['./key-phrase-button.component.css']
})
export class KeyPhraseButtonComponent implements OnInit {
  @Input() phraseChoice: number; 

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

}
