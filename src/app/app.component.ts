import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { BoardComponent } from "./tictactoe/board/board.component";
import { NavBar } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'the-app';
}
