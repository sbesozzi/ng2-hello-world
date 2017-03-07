import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input
        #myInput type="text"
        [(ngModel)]="message"
        [ngClass]="{mousedown:isMousedown}"
        (mousedown)="isMousedown = true"
        (mouseup)="isMousedown = flase"
        (mouseleave)="isMousedown = false"
        >
      <button (click)="update.emit({text:message})">Click me!</button>
    </div>
  `,
  styles: [`
    :host{
      display: flex;
      flex-direction: column;
    }
    .mousedown{
      border: 2px solid purple;
    }
    input:focus{
      font-weight: bold;
      outline: none;
    }
    button{
      border: none;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

}
