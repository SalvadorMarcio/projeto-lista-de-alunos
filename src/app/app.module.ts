
//app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAlunosComponent,
    EditarAlunoComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
