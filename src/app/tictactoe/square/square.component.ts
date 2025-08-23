import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {

  @Input()
  value!: string;
  
}
