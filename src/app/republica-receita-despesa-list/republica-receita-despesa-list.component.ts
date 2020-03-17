import { Component, OnInit } from '@angular/core';
import { ReceitaDespesa } from '../models/receita-despesa';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitadespesaService } from '../services/receitadespesa.service';
import { LoginService } from '../services/login.service';
import { Morador } from '../models/morador';

@Component({
  selector: 'app-republica-receita-despesa-list',
  templateUrl: './republica-receita-despesa-list.component.html',
  styleUrls: ['./republica-receita-despesa-list.component.css']
})
export class RepublicaReceitaDespesaListComponent implements OnInit {

  morador: Morador;
  receitaDespesa: ReceitaDespesa[];

  displayedColumns: string[] = [
    'tipo',
    'descricao',
    'valor',
    'periodo',
    'dataLancamento',
    'dataVencimentoRecebimento',
    'acoes'
  ];

  constructor(
    private router: Router,
    private receitadespesaService: ReceitadespesaService,
    private loginService: LoginService
  ) {
    this.morador = this.loginService.getMorador();
  }

  ngOnInit() {
    if (this.morador.representante) {
      this.receitadespesaService.findReceitaDespesaByRepublica(this.morador.republica).subscribe(data => {
        this.receitaDespesa = data;
      });
    }
  }

  onCreate() {
    let receitaDespesa = new ReceitaDespesa();
    this.receitadespesaService.setReceitaDespesa(receitaDespesa);
    this.router.navigate(["/republicas/addreceitasdespesas"]);
  }

  onUpdate(recd: ReceitaDespesa) {
    this.receitadespesaService.setReceitaDespesa(recd);
    this.router.navigate(["/republicas/addreceitasdespesas"]);
  }

  estornar(recd: ReceitaDespesa) {
    let receitaDespesa = new ReceitaDespesa();
    receitaDespesa = recd;
    receitaDespesa.descricao = "Estorno " + receitaDespesa.descricao;

    if (receitaDespesa.tipo === "Receita") {
      receitaDespesa.tipo = "Despesa";
    } else {
      receitaDespesa.tipo = "Receita";
    }

    this.receitadespesaService.setReceitaDespesa(receitaDespesa);
    this.router.navigate(["/republicas/addreceitasdespesas"]);
  }
}
