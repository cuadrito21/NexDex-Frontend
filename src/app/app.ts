import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { Footer } from "./component/content/layout/footer/footer";
import { Header } from './component/content/layout/header/header';
import { Main } from "./component/content/layout/main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Main],
=======
import { Header } from "./component/content/layout/header/header";
import { Footer } from './component/content/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
>>>>>>> 7798a5b57c31b0bd56140b7553bd769733982598
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'NexDev';
}
