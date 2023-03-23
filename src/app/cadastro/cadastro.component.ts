import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CadastrarService } from '../cadastrar.service';
import { Campo } from '../types/campo';

import { CamposForm } from '../types/campos-form';
import { Tipo } from '../types/tipo';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: CadastrarService
  ) {}

  ngOnInit(): void {
    // acessar rota /cadastro?tipo=<valor>
    this.route.queryParams.subscribe((param) => {
      this.tipo = param['tipo'];
    });
  }

  tipo: Tipo | undefined;

  camposForm: CamposForm = {
    profissional: [
      { nome: 'nome', type: 'text' },
      { nome: 'email', type: 'email' },
      { nome: 'telefone', type: 'tel' },
      { nome: 'senha', type: 'password' },
      { nome: 'cpf', type: 'text' },
      { nome: 'categoria', type: 'text' },
      { nome: 'endereco', type: 'text' },
      { nome: 'empresa', type: 'text' },
    ],
    paciente: [
      { nome: 'nome', type: 'text' },
      { nome: 'email', type: 'email' },
      { nome: 'telefone', type: 'telefone' },
      { nome: 'senha', type: 'password' },
      { nome: 'cpf', type: 'cpf' },
      { nome: 'endereco', type: 'endereco' },
    ],
    produto: [
      { nome: 'nome', type: 'text' },
      { nome: 'categoria', type: 'text' },
      { nome: 'descricao', type: 'text' },
      { nome: 'valor', type: 'number' },
      { nome: 'quantidade', type: 'number' },
    ],
    empresa: [
      { nome: 'nome', type: 'text' },
      { nome: 'email', type: 'email' },
      { nome: 'telefone', type: 'tel' },
      { nome: 'senha', type: 'password' },
      { nome: 'cnpj', type: 'text' },
      { nome: 'categoria', type: 'text' },
      { nome: 'endereco', type: 'text' },
    ],
  };

  get campos(): Campo[] {
    return this.camposForm[this.tipo] ?? [];
  }

  get hideForm(): boolean {
    return this.tipo === undefined || this.campos.length === 0;
  }

  cadastrar(value: any): void {
    this.service.cadastrar(this.tipo, value).subscribe(console.log);
  }
}
