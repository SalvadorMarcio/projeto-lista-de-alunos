
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

interface Aluno {
  nome: string;
  email: string;
  //idade: number;
  matricula: string;
}

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.css']
})
export class ListarAlunosComponent implements OnInit {
  alunos: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit(): void {
    this.alunoService.getAlunosSubject()
      .pipe(takeUntil(this.destroy$))
      .subscribe(alunosAtualizados => {
        this.alunos = alunosAtualizados;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  confirmarExclusaoAluno(index: number) {
    if (confirm('Tem certeza que deseja excluir este aluno?')) {
      this.excluirAluno(index);
    }
  }
   
  excluirAluno(index: number) {
    this.alunoService.excluirAluno(index);
  }

  editarAluno(index: number) {
    this.router.navigate(['/editar', index]);
  }

  adicionarAluno() {
    this.router.navigate(['/adicionar']);
  }
}



