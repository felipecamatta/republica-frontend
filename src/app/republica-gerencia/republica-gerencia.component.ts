import { Component, OnInit } from '@angular/core';
import { Republica } from '../models/republica';
import { Morador } from '../models/morador';
import { LoginService } from '../services/login.service';
import { RepublicaService } from '../services/republica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-republica-gerencia',
  templateUrl: './republica-gerencia.component.html',
  styleUrls: ['./republica-gerencia.component.css']
})
export class RepublicaGerenciaComponent implements OnInit {

  morador: Morador;
  republica: Republica;

  displayedColumns: string[] = ['nome', 'apelido', 'telefone', 'link', 'acoes'];

  constructor(private router: Router, private republicaService: RepublicaService, private loginService: LoginService) { }

  ngOnInit() {
    this.morador = this.loginService.getMorador();
    this.republica = this.loginService.getMorador().republica;
  }

  onUpdateRepublica(republica: Republica) {
    this.republicaService.setRepublica(republica);
    this.router.navigate(['/addrepublica']);
  }

  onDeleteRepublica(id: number) {
    this.republicaService.delete(id).subscribe(result => {
      alert('República deletada!');
      this.router.navigate(['/']);
    });
    this.ngOnInit();
  }

  onAdd(id: number) {
    alert('localhost:8080/republicas/' + id + '/adicionarmorador');
  }

  onDeleteMorador(morador: Morador) {
    this.republicaService.deleteMorador(this.republica.id, morador.id).subscribe(result => {
      if (result === true) {
        alert('Morador removido com sucesso!');
      } else {
        alert('Falha ao remover morador');
      }
      this.ngOnInit();
    });
  }

  onAlterarRepresentante(morador: Morador) {
    this.republicaService.alterarRepresentante(this.republica.id, morador.id).subscribe(result => {
      if (result === true) {
        alert('Representante alterado com sucesso!');
      } else {
        alert('Falha ao alterar representante!');
      }
      this.ngOnInit();
    });
    this.ngOnInit();
  }

  onSair(morador: Morador) {
    this.republicaService.deleteMorador(this.republica.id, morador.id).subscribe(result => {
      if (result === true) {
        alert('Você saiu da república com sucesso!');
      } else {
        alert('Falha ao sair da república!');
      }
      this.router.navigate(['/']);
    });
  }

  onCriarRepublica() {
    this.router.navigate(['/addrepublica']);
  }

  onConvidarMorador() {
    this.router.navigate(['/moradores']);
  }

}
