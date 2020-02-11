import { Component, OnInit } from '@angular/core';
import { Republica } from '../models/republica';
import { ActivatedRoute, Router } from '@angular/router';
import { RepublicaService } from '../services/republica.service';
import { Morador } from '../models/morador';
import { MoradorService } from '../services/morador.service';

@Component({
  selector: 'app-republica-form',
  templateUrl: './republica-form.component.html',
  styleUrls: ['./republica-form.component.css']
})
export class RepublicaFormComponent implements OnInit {

  republica: Republica;
  moradores: Morador[];

  constructor(private route: ActivatedRoute, private router: Router,
              private republicaService: RepublicaService, private moradorService: MoradorService) {
    this.republica = new Republica();
  }

  ngOnInit() {
    this.republica = this.republicaService.getRepublica();

    if (this.republica.id !== undefined) {
      this.republicaService.getMoradores(this.republica).subscribe(data => {
        this.moradores = data;
      });
    } else {
      this.moradorService.findAll().subscribe(data => {
        this.moradores = data;
      });
    }
  }

  onSubmit() {
    if (this.republica.id === undefined) {
      this.republicaService.save(this.republica).subscribe(result => {
        this.router.navigate(['/republicas']);
        alert('República adicionada com sucesso!');
      });
    } else {
      this.republicaService.update(this.republica).subscribe(result => {
        this.router.navigate(['/republicas']);
        alert('República editada com sucesso!');
      });
    }
  }

  getRepublicaService() {
    return this.republicaService;
  }

}
