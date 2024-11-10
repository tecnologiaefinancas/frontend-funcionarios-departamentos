import { Routes } from '@angular/router';
import { DepartamentosPesquisaComponent } from './departamentos-pesquisa/departamentos-pesquisa.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/departamentos', pathMatch: 'full' },
  { path: 'departamentos', component: DepartamentosPesquisaComponent }
];
