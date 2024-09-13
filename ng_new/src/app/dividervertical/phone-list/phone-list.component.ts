import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [NgFor,ButtonModule],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent {
  phones = [
    {
      id: '1',
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    },
    {
      id: '2',
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    },
    {
      id: '3',
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

  constructor(private router: Router) {}

  // Method to navigate to another page
  navigateToPage() {
    // This will navigate to the "/new-page" route
    this.router.navigate(['/new-page']);
  }
}
