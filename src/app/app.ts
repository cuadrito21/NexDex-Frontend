import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Offers } from "./pages/private/offers/offers";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Offers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'NexDev';
}
