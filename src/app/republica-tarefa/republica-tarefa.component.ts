import { Component, OnInit } from '@angular/core';
import { Morador } from '../models/morador';
import { Tarefa } from '../models/tarefa';
import { LoginService } from '../services/login.service';
import { TarefaService } from '../services/tarefa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-republica-tarefa',
  templateUrl: './republica-tarefa.component.html',
  styleUrls: ['./republica-tarefa.component.css']
})
export class RepublicaTarefaComponent implements OnInit {

  morador: Morador;
  tarefas: Tarefa[];

  displayedColumns: string[] = ['id', 'dataAgendamento', 'dataTermino', 'descricao', 'finalizada', 'acoes'];

  constructor(private loginService: LoginService, private tarefaService: TarefaService, private router: Router) {
    this.morador = this.loginService.getMorador();
  }

  ngOnInit() {
    if (this.morador.representante) {
      this.tarefaService.findByRepublica(this.morador.republica).subscribe(data => {
        this.tarefas = data;
      });
    }
  }

  onUpdate(tarefa: Tarefa) {
    this.tarefaService.setTarefa(tarefa);
    this.router.navigate(['/addtarefa']);
  }

  onDelete(tarefa: Tarefa) {
    if (confirm("Deseja realmente excluir?")) {
      this.tarefaService.delete(tarefa);
    }
  }

  onCreate() {
    let tarefa = new Tarefa();
    this.tarefaService.setTarefa(tarefa);
    this.router.navigate(['/addtarefa']);
  }

}
