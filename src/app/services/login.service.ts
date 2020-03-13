import { Injectable } from '@angular/core';
import { Morador } from '../models/morador';
import { MoradorService } from './morador.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private morador: Morador;

  constructor(private moradorService: MoradorService) {
    moradorService.findAll()
    .subscribe(data => {
      this.morador = data[0];
    });
   }

  public getMorador(): Morador {
    return this.morador;
  }

  public setMorador(m: Morador) {
    this.morador = m;
  }  
}
