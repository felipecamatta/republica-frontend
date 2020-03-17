import { Component, OnInit } from '@angular/core';
import { Morador } from '../models/morador';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { MoradorService } from '../services/morador.service';

@Component({
  selector: 'app-morador-gerencia',
  templateUrl: './morador-gerencia.component.html',
  styleUrls: ['./morador-gerencia.component.css']
})
export class MoradorGerenciaComponent implements OnInit {

  morador: Morador;

  constructor(private router: Router, private loginService: LoginService, private moradorService: MoradorService) { 
    this.morador = this.loginService.getMorador();
  }

  ngOnInit() {
  }

  onEditarMorador(morador: Morador) {
    this.moradorService.setMorador(morador);
    this.router.navigate(['addmorador']);
  }

}
