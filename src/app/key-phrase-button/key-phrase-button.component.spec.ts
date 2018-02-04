import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPhraseButtonComponent } from './key-phrase-button.component';

describe('KeyPhraseButtonComponent', () => {
  let component: KeyPhraseButtonComponent;
  let fixture: ComponentFixture<KeyPhraseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyPhraseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPhraseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
