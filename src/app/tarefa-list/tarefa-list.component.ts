import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Morador } from '../models/morador';
import { LoginService } from '../services/login.service';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa';

@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.css']
})
export class TarefaListComponent implements OnInit {

  tarefas: Tarefa[];
  morador: Morador;

  displayedColumns: string[] = ['id', 'dataAgendamento', 'dataTermino', 'descricao', 'finalizada', 'acoes'];

  constructor(private router: Router,
              private tarefaService: TarefaService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.morador = this.loginService.getMorador();
    this.tarefaService.findByMorador(this.morador).subscribe(data => {
      this.tarefas = data;
    });
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

  onRealizar(tarefa: Tarefa) {
    if (confirm("Deseja realização da tarefa?")) {
      this.tarefaService.realizarTarefa(this.morador, tarefa);
    }
  }

  onCreate() {
    let tarefa = new Tarefa();
    this.tarefaService.setTarefa(tarefa);
    this.router.navigate(['/addtarefa']);
  }

  onAtualizar() {
    this.morador = this.loginService.getMorador();
    this.tarefaService.findByMorador(this.morador).subscribe(data => {
      this.tarefas = data;
    });
  }

}
