import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { EditarDepartamentoFormComponent } from '../editar-departamento-form/editar-departamento-form.component';
import { NovoDepartamentoFormComponent } from '../novo-departamento-form/novo-departamento-form.component'

@Component({
  selector: 'app-departamentos-pesquisa',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    DialogModule,
    FormsModule,
    EditarDepartamentoFormComponent,
    NovoDepartamentoFormComponent
  ],
  templateUrl: './departamentos-pesquisa.component.html',
  styleUrls: ['./departamentos-pesquisa.component.css']
})
export class DepartamentosPesquisaComponent {
  searchTerm: string = '';
  displayNewDialog: boolean = false;

  departamentos = [
    {id: 2401, nomeDepartamento: 'Financeiro'},
    {id: 2402, nomeDepartamento: 'Recursos Humanos'},
    {id: 2403, nomeDepartamento: 'TI'},
    {id: 2404, nomeDepartamento: 'Marketing'},
    {id: 2405, nomeDepartamento: 'Vendas'},
    {id: 2406, nomeDepartamento: 'Compras'},
    {id: 2407, nomeDepartamento: 'Produção'},
    {id: 2408, nomeDepartamento: 'Logística'},
    {id: 2409, nomeDepartamento: 'Jurídico'},
    {id: 2410, nomeDepartamento: 'Administrativo'},
    {id: 2411, nomeDepartamento: 'Pesquisa e Desenvolvimento'}
  ];
  filteredDepartamentos = this.departamentos;
  selectedDepartamento: any;
  displayEditDialog: boolean = false;

  search() {
    this.filteredDepartamentos = this.departamentos.filter(departamento =>
      departamento.nomeDepartamento.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  editDepartamento(departamento: any) {
    this.selectedDepartamento = {...departamento};
    this.displayEditDialog = true;
  }

  saveDepartamento(updatedDepartamento: any) {
    const index = this.departamentos.findIndex(d => d.id === updatedDepartamento.id);
    if (index !== -1) {
      this.departamentos[index] = updatedDepartamento;
    }
    this.filteredDepartamentos = this.departamentos;
    this.displayEditDialog = false;
  }

  cancelEdit() {
    this.displayEditDialog = false;
  }

  deleteDepartamento(id: number) {
    this.departamentos = this.departamentos.filter(departamento => departamento.id !== id);
    this.search(); // Atualizar a lista filtrada }
  }

  showNewDialog() {
    this.displayNewDialog = true;
  }
}
