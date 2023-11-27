
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';

const routes: Routes = [
  { path: 'listar', component: ListarAlunosComponent },
  { path: 'editar/:index', component: EditarAlunoComponent },
  { path: 'adicionar', component: EditarAlunoComponent },
  { path: '', redirectTo: '/listar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
