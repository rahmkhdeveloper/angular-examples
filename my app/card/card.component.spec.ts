import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('CardComponent', () => {
  let cardComponent: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let voteButton: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, HighlightDirective ]
    })

    fixture = TestBed.createComponent(CardComponent);
    cardComponent = fixture.componentInstance;
  
    cardComponent.cardEmployee = {name: 'Rahul', jobRole: 'Angular Developer'};
    voteButton = fixture.debugElement.query(By.css('button'));
  });

  afterEach(() => {
    cardComponent.cardEmployee = '';
  })
  
  it('should create the card', () => {
    expect(cardComponent).not.toBeFalsy();
  });

  it('should fetch the input property', ()=>{
    expect(cardComponent.cardEmployee).not.toBe(undefined);
  }),
  
  it('should emit jobRole for that employee', ()=>{

    let jobRole: string;
    cardComponent.customClickEvent.subscribe(result => jobRole = result);
    voteButton.triggerEventHandler('click', null);
    
    expect(jobRole).toBe('Angular Developer');
  })
});