import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tarefa } from '../models/tarefa';
import { TarefaDto } from '../models/tarefa-dto';
import { Republica } from '../models/republica';
import { Morador } from '../models/morador';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private tarefaUrl: string;
  private tarefa = new Tarefa();

  constructor(private http: HttpClient) {
    this.tarefaUrl = 'https://republica-backend.herokuapp.com/tarefas';
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    descricao: new FormControl('', Validators.required),
    dataAgendamento: new FormControl('', Validators.required),
    dataTermino: new FormControl('', Validators.required),
  });

  public findByRepublica(republica: Republica) {
    return this.http.get<Tarefa[]>(`${this.tarefaUrl}/republica/${republica.id}`);
  }

  public findByMorador(morador: Morador) {
    return this.http.get<Tarefa[]>(`${this.tarefaUrl}/republica/${morador.republica.id}/morador/${morador.id}`);
  }

  public save(tarefaDto: TarefaDto) {
    return this.http.post<TarefaDto>(this.tarefaUrl, tarefaDto);
  }

  public update(tarefa: Tarefa) {
    return this.http.put<Tarefa>(`${this.tarefaUrl}/${tarefa.id}`, tarefa);
  }

  public delete(tarefa: Tarefa) {
    return this.http.delete<void>(`${this.tarefaUrl}/${tarefa.id}`);
  }

  public realizarTarefa(morador: Morador, tarefa: Tarefa) {
    return this.http.post<void>(`${this.tarefaUrl}/republica/${morador.republica.id}/morador/${morador.id}/realizar`, tarefa);
  }

  public getTarefa() {
    return this.tarefa;
  }

  public setTarefa(tarefa: Tarefa) {
    this.tarefa = tarefa;
  }

}
