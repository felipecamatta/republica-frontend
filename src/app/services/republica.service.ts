import { Injectable } from '@angular/core';
import { Republica } from '../models/republica';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Morador } from '../models/morador';

@Injectable({
  providedIn: 'root'
})
export class RepublicaService {

  private republicasUrl: string;
  private republica = new Republica();
  private morador = new Morador();
  private moradores: Morador[];

  constructor(private http: HttpClient) {
    this.republicasUrl = 'https://republica-backend.herokuapp.com/republicas';
  }

  public form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    nome: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    numeroVagas: new FormControl('', Validators.required),
    tipoLocacao: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    integrantes: new FormControl('', Validators.required),
    numeroComodos: new FormControl('', Validators.required),
    utensilios: new FormControl('', Validators.required),
    diferencial: new FormControl('', Validators.required),
    numeroVagasDisponiveis: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    representante: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required)
  });

  public findAll(): Observable<Republica[]> {
    return this.http.get<Republica[]>(this.republicasUrl);
  }

  public find(id: number): Observable<Republica> {
    return this.http.get<Republica>(`${this.republicasUrl}/${id}`);
  }

  public save(republica: Republica) {
    return this.http.post<Republica>(this.republicasUrl, republica);
  }

  public update(republica: Republica) {
    return this.http.put<Republica>(`${this.republicasUrl}/${republica.id}`, republica);
  }

  public delete(id: number) {
    return this.http.delete<void>(`${this.republicasUrl}/${id}`);
  }

  public getRepublica() {
    return this.republica;
  }

  public setRepublica(republica: Republica) {
    this.republica = republica;
  }

  public getMoradores(republica: Republica): Observable<Morador[]> {
    return this.http.get<Morador[]>(`${this.republicasUrl}/${republica.id}/moradores`);
  }

  public deleteMorador(idRepublica: number, idMorador: number) {
    return this.http.get<boolean>(`${this.republicasUrl}/${idRepublica}/removermorador/${idMorador}`);
  }

  public alterarRepresentante(idRepublica: number, idMorador: number) {
    return this.http.get<boolean>(`${this.republicasUrl}/${idRepublica}/alterarrepresentante/${idMorador}`);
  }

  public addMorador(morador: Morador) {
    return this.http.post<boolean>(`${this.republicasUrl}/${this.republica.id}/adicionarmorador/`, morador);
  }

}
