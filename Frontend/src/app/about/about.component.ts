import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../product/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
