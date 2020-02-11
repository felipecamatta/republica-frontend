import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { TarefaService } from '../services/tarefa.service';
import { TarefaDto } from '../models/tarefa-dto';
import { Morador } from '../models/morador';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent implements OnInit {

  tarefa: Tarefa;
  tarefaDto: TarefaDto;
  moradoresIncluidos: Morador[] = new Array();
  morador: Morador;

  constructor(private router: Router,
              private loginService: LoginService,
              private tarefaService: TarefaService) {
                this.tarefaDto = new TarefaDto();
               }

  ngOnInit() {
    this.morador = this.loginService.getMorador();
  }

  onSubmit() {
    if (this.tarefaDto.id === undefined) {
      this.tarefaService.save(this.tarefaDto).subscribe(result => {
        console.log(this.tarefaDto);
        this.tarefaDto.republica = this.morador.republica;
        this.router.navigate(['/tarefas']);
        alert('Tarefa cadastrada com sucesso!');
      });
    } else {
      this.tarefaService.update(this.tarefa).subscribe(result => {
        this.router.navigate(['/tarefas']);
        alert('Tarefa atualizada com sucesso!');
      });
    }
  }

  onCheck(value, isChecked) {
    if (isChecked) {
      this.moradoresIncluidos.push(value);
    } else {
      this.moradoresIncluidos.splice(this.moradoresIncluidos.indexOf(value), 1);
    }
  }

  onAtualizar() {
    this.morador = this.loginService.getMorador();
  }

  getForm() {
    return this.tarefaService.form;
  }

}
