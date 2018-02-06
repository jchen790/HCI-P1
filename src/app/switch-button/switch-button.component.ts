import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.css']
})
export class SwitchButtonComponent implements OnInit {
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    this.clicked.emit("1");
  }

}
