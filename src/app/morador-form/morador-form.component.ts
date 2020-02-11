import { Component, OnInit } from '@angular/core';
import { Morador } from '../models/morador';
import { ActivatedRoute, Router } from '@angular/router';
import { MoradorService } from '../services/morador.service';
import { Republica } from '../models/republica';
import { RepublicaService } from '../services/republica.service';

@Component({
  selector: 'app-morador-form',
  templateUrl: './morador-form.component.html',
  styleUrls: ['./morador-form.component.css']
})
export class MoradorFormComponent implements OnInit {

  morador: Morador;
  republica: Republica;
  republicas: Republica[];

  constructor(private route: ActivatedRoute, private router: Router,
              private moradorService: MoradorService, private republicaService: RepublicaService) { }

  ngOnInit() {
    this.morador = this.moradorService.getMorador();
    this.republicaService.findAll().subscribe(data => {
      this.republicas = data;
    });
  }

  onSubmit() {
    if (this.morador.id === undefined) {
      this.moradorService.save(this.morador).subscribe(result => {
        this.router.navigate(['/']);
        alert('Morador adicionada com sucesso!');
      });
    } else {
      this.moradorService.update(this.morador).subscribe(result => {
        this.router.navigate(['/']);
        alert('Morador editado com sucesso!');
      });
    }
  }

  getMoradorService() {
    return this.moradorService;
  }
}
