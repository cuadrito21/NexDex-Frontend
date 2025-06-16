import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Offers } from "./pages/private/offers/offers";
import { Footer } from './component/content/layout/footer/footer';
import { Header } from './component/content/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'NexDev';
}
