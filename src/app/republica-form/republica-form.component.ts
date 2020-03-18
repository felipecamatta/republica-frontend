import { Component, OnInit } from '@angular/core';
import { Republica } from '../models/republica';
import { ActivatedRoute, Router } from '@angular/router';
import { RepublicaService } from '../services/republica.service';
import { Morador } from '../models/morador';
import { MoradorService } from '../services/morador.service';
import { Endereco } from '../models/endereco';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-republica-form',
  templateUrl: './republica-form.component.html',
  styleUrls: ['./republica-form.component.css']
})
export class RepublicaFormComponent implements OnInit {

  republica: Republica;
  endereco: Endereco;
  moradores: Morador[];

  constructor(private route: ActivatedRoute, private router: Router,
              private loginService: LoginService,
              private republicaService: RepublicaService, private moradorService: MoradorService) {
    this.republica = new Republica();
    this.endereco = new Endereco();
  }

  ngOnInit() {
    this.republica = this.republicaService.getRepublica();
    if (this.republica.endereco !== undefined) {
      this.endereco = this.republica.endereco;
    }
  }

  onSubmit() {
    this.republica.endereco = this.endereco;
    if (this.republica.id === undefined) {
      this.republica.representante = this.loginService.getMorador();
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

}
