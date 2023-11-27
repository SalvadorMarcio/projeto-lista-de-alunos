
// editar-aluno.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  formulario!: FormGroup
  aluno: any = {};
  editar = false;
  index: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      //idade: [null, [Validators.required, Validators.min(1)]],
      matricula: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['index']) {
        this.index = +params['index'];
        this.aluno = this.alunoService.getAluno(this.index);
        this.formulario.setValue({...this.aluno})
        this.editar = true;
  
        console.log('Dados do aluno no ngOnInit:', this.aluno);
      }
    });
  }
  
  onSubmit() {
    if (this.formulario.valid) {
            
      this.aluno = { ...this.aluno, ...this.formulario.value };
        
      // Chama o serviço para adicionar ou atualizar o aluno
      if (this.editar) {
        // Se estiver editando, chama o método de editar do serviço
        this.alunoService.editarAluno(this.index!, this.aluno);
      } else {
        // Se não estiver editando, chama o método de adicionar do serviço
        this.alunoService.adicionarAluno(this.aluno);
      }
  
      // Navega para a rota de listar
      this.router.navigate(['/listar']);
    } //else {
      
      //Object.keys(this.formulario.controls).forEach(key => {
      //  const control = this.formulario.get(key);
       
      //});
    //}
  }
   
}


