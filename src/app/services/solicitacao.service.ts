import { Injectable } from '@angular/core';
import { Solicitacao } from '../models/solicitacao';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Morador } from '../models/morador';
import { Republica } from '../models/republica';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  private solicitacaoUrl: string;
  private morador: Morador;
  private solicitacao: Number[];

  constructor(private http: HttpClient) {
    this.solicitacaoUrl = 'https://republica-back.herokuapp.com/solicitacao';
  }

  public solicitar(republica: Republica, morador: Morador){
    this.solicitacao = [];
    this.solicitacao.push(republica.id);
    this.solicitacao.push(morador.id);
    return this.http.post<Solicitacao>(this.solicitacaoUrl, this.solicitacao);
  }

  public delete(id: number){
    return this.http.delete<void>(`${this.solicitacaoUrl}/${id}`);
  }

  public findAll(id: number): Observable<Solicitacao[]> {
    return this.http.get<Solicitacao[]>(`${this.solicitacaoUrl}/${id}`);
  }

  public getMorador(): Morador {
    return this.morador;
  }

  public setMorador(m: Morador) {
    this.morador = m;
  }
}
