import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';
import { TranslateButtonComponent } from './translate-button/translate-button.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { KeyPhraseButtonComponent } from './key-phrase-button/key-phrase-button.component';
import { CompleteButtonComponent } from './complete-button/complete-button.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    SwitchButtonComponent,
    TranslateButtonComponent,
    TextBoxComponent,
    KeyPhraseButtonComponent,
    CompleteButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
