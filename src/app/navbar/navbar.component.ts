import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, // Adicionar CommonModule aqui
    ButtonModule,
    SidebarModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
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
