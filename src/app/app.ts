import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/content/layout/header/header";
import { Footer } from './component/content/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'NexDev';
}
