import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavBar {
  items = [
    {
      routeLink: '../direct',
      icon: 'mail',
      label: 'Direct',
    },
    {
      routeLink: '../group',
      icon: 'groups',
      label: 'Group',
    },
    {
      routeLink: '../public',
      icon: 'language',
      label: 'Public',
    },
    {
      routeLink: '../settings',
      icon: 'miscellaneous_services',
      label: 'Settings',
    }
  ];
}
