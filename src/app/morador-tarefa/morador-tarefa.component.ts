import { Component, OnInit } from '@angular/core';
import { Morador } from '../models/morador';
import { LoginService } from '../services/login.service';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa';

@Component({
  selector: 'app-morador-tarefa',
  templateUrl: './morador-tarefa.component.html',
  styleUrls: ['./morador-tarefa.component.css']
})
export class MoradorTarefaComponent implements OnInit {

  morador: Morador;
  tarefas: Tarefa[];

  displayedColumns: string[] = ['id', 'dataAgendamento', 'dataTermino', 'descricao', 'finalizada', 'acoes'];

  constructor(private loginService: LoginService, private tarefaService: TarefaService) {
    this.morador = this.loginService.getMorador();
  }

  ngOnInit() {
    this.tarefaService.findByMorador(this.morador).subscribe(data => {
      this.tarefas = data;
    });
  }

  onRealizar(tarefa: Tarefa) {
    if (confirm("Deseja confirmar realização da tarefa?")) {
      this.tarefaService.realizarTarefa(this.morador, tarefa);
    }
  }

}
