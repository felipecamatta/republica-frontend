import { Injectable } from '@angular/core';
import { Republica } from '../models/republica';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepublicadisponivelService {

  private republicasDisponiveisUrl: string
  private republica = new Republica()

  constructor(private http: HttpClient) {
    this.republicasDisponiveisUrl = 'http://localhost:8080/republicas/disponiveis';
  }

  public findAll(): Observable<Republica[]> {
    return this.http.get<Republica[]>(this.republicasDisponiveisUrl)
  }

}
