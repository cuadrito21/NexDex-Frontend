import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./component/content/layout/footer/footer";
import { Header } from './component/content/layout/header/header';
import { Main } from "./component/content/layout/main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'NexDev';
}
