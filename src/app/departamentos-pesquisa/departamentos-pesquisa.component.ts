import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms'; // Adicione FormsModule para o ngModel

@Component({
  selector: 'app-departamentos-pesquisa',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    FormsModule // Adicione FormsModule aqui
  ],
  templateUrl: './departamentos-pesquisa.component.html',
  styleUrls: ['./departamentos-pesquisa.component.css']
})
export class DepartamentosPesquisaComponent {
  searchTerm: string = '';
  departamentos = [
    { id: 2401, nomeDepartamento: 'Financeiro' },
    { id: 2402, nomeDepartamento: 'Recursos Humanos' },
    { id: 2403, nomeDepartamento: 'TI' },
    { id: 2404, nomeDepartamento: 'Marketing' },
    { id: 2405, nomeDepartamento: 'Vendas' },
    { id: 2406, nomeDepartamento: 'Compras' },
    { id: 2407, nomeDepartamento: 'Produção' },
    { id: 2408, nomeDepartamento: 'Logística' },
    { id: 2409, nomeDepartamento: 'Jurídico' },
    { id: 2410, nomeDepartamento: 'Administrativo' },
    { id: 2411, nomeDepartamento: 'Pesquisa e Desenvolvimento' }
  ];
  filteredDepartamentos = this.departamentos;

  search() {
    this.filteredDepartamentos = this.departamentos.filter(departamento =>
      departamento.nomeDepartamento.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
