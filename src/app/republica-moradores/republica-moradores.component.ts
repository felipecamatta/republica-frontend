import { Component, OnInit } from '@angular/core';
import { Morador } from '../models/morador';
import { ActivatedRoute, Router } from '@angular/router';
import { RepublicaService } from '../services/republica.service';
import { MatDialog } from '@angular/material/dialog';
import { Republica } from '../models/republica';

@Component({
  selector: 'app-republica-moradores',
  templateUrl: './republica-moradores.component.html',
  styleUrls: ['./republica-moradores.component.css']
})
export class RepublicaMoradoresComponent implements OnInit {

  moradores: Morador[];
  republica: Republica;
  republicas: Republica[];

  displayedColumns: string[] = ['nome', 'apelido', 'telefone', 'link', 'sexo', 'acoes'];

  constructor(private route: ActivatedRoute, private router: Router,
              private republicaService: RepublicaService, private dialog: MatDialog) { }

  ngOnInit() {
    this.republicaService.findAll().subscribe(data => {
      this.republicas = data;
    });
    this.republicaService.getMoradores(this.republica).subscribe(data => {
      this.moradores = data;
    });
  }

  onAdd(id: number) {
    alert('localhost:8080/republicas/' + id + '/adicionarmorador');
  }

  onDelete(morador: Morador) {
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
  }

  onChange(value) {
    this.republica = value;
    this.republicaService.getMoradores(this.republica).subscribe(data => {
      this.moradores = data;
    });
    this.ngOnInit();
  }
}
