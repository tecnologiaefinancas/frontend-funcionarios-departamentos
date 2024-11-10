import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('panelState', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class NavbarComponent {
  displaySidebar: boolean = false;

  menuItems: MenuItem[] = [
    { label: 'Usuário' },
    { label: 'Departamentos' },
    { label: 'Funcionários' }
  ];

  toggleSidebar() {
    this.displaySidebar = !this.displaySidebar;
  }
}
