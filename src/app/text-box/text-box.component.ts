import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Input() phrase: string = "";

  @Output() ogText = new EventEmitter<string>();

  inputText: string = "";

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges()
  {
    // add phrase to input text when button is clicked
  }

}
