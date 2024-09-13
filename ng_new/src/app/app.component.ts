import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DividerverticalComponent } from './dividervertical/dividervertical.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DividerverticalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng_new';
}
