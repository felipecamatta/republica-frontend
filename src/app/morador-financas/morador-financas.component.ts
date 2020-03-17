import { Component, OnInit } from "@angular/core";
import { ReceitaDespesa } from "../models/receita-despesa";
import { ActivatedRoute, Router } from "@angular/router";
import { ReceitadespesaService } from "../services/receitadespesa.service";
import { Morador } from "../models/morador";
import { MoradorService } from "../services/morador.service";
import { LoginService } from '../services/login.service';

@Component({
  selector: "app-morador-financias",
  templateUrl: "./morador-financas.component.html",
  styleUrls: ["./morador-financas.component.css"]
})
export class MoradorFinancasComponent implements OnInit {

  receitaDespesa: ReceitaDespesa[];
  morador: Morador;
  despesaTotal: number;
  receitaTotal: number;

  displayedColumns: string[] = [
    "tipo",
    "descricao",
    "valor",
    "valorPago",
    "periodo",
    "dataLancamento",
    "dataVencimentoRecebimento",
    "acoes"
  ];

  constructor(
    private receitadespesaService: ReceitadespesaService,
    private loginService: LoginService
  ) {
    this.morador = this.loginService.getMorador();
  }

  ngOnInit() {
    this.receitadespesaService
      .findReceitaDespesaByMorador(this.morador)
      .subscribe(data => {
        this.receitaDespesa = data;
      });
  }

  onPagar(id) {
    this.receitadespesaService.pagar(this.morador, id).subscribe();
    alert('Finança Recebida/Paga!');
    this.ngOnInit();
  }
}
