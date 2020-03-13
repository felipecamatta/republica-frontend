import { Component, OnInit } from "@angular/core";
import { ReceitaDespesa } from "../models/receita-despesa";
import { ActivatedRoute, Router } from "@angular/router";
import { ReceitadespesaService } from "../services/receitadespesa.service";
import { Morador } from "../models/morador";
import { MoradorService } from "../services/morador.service";

@Component({
  selector: "app-morador-financias",
  templateUrl: "./morador-financas.component.html",
  styleUrls: ["./morador-financas.component.css"]
})
export class MoradorFinancasComponent implements OnInit {
  receitaDespesa: ReceitaDespesa[];
  morador: Morador;
  moradores: Morador[];
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
    private route: ActivatedRoute,
    private router: Router,
    private receitadespesaService: ReceitadespesaService,
    private moradorService: MoradorService
  ) {}

  ngOnInit() {
    this.moradorService.findAll().subscribe(data => {
      this.moradores = data;
    });
    this.receitadespesaService
      .findReceitaDespesaByMorador(this.morador)
      .subscribe(data => {
        this.receitaDespesa = data;
      });
  }

  onChange(value) {
    this.morador = value;
    console.log(this.morador);
    this.receitaTotal = 0;
    this.despesaTotal = 0;
    this.receitadespesaService
      .findReceitaDespesaByMorador(this.morador)
      .subscribe(data => {
        this.receitaDespesa = data;
        this.receitaDespesa.forEach(element => {
          if (element.tipo === 'Despesa') {
            this.despesaTotal += element.valor;
          } else {
            this.receitaTotal += element.valor;
          }
        });
      });
    this.ngOnInit();
  }

  onPagar(id) {
    this.receitadespesaService.pagar(this.morador, id).subscribe();
    alert('Finança Recebida/Paga!');
    this.ngOnInit();
  }
}
