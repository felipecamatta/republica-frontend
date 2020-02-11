import { Injectable } from '@angular/core';
import { Historico } from '../models/historico';
import { HttpClient } from '@angular/common/http';
import { Morador } from '../models/morador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private historicoURL: string
  private historico = new Historico();

  constructor(private http: HttpClient) {
    this.historicoURL = 'https://republica-back.herokuapp.com/morador/historicos';
  }

  public save(historico: Historico) {
    return this.http.post<Historico>(this.historicoURL, historico);
  }

  public getHistoricobyMorador(morador: Morador): Observable<Historico[]> {
    return this.http.get<Historico[]>(`${this.historicoURL}/morador/${morador.id}`);
  }

}
