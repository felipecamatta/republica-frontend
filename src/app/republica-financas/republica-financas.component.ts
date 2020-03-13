import { Component, OnInit, Inject } from "@angular/core";
import { ReceitaDespesa } from "../models/receita-despesa";
import { ActivatedRoute, Router } from "@angular/router";
import { ReceitadespesaService } from "../services/receitadespesa.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { LoginService } from '../services/login.service';
import { Morador } from '../models/morador';

@Component({
  selector: "app-republica-financias",
  templateUrl: "./republica-financas.component.html",
  styleUrls: ["./republica-financas.component.css"]
})
export class RepublicaFinancasComponent implements OnInit {
  receitaDespesas: ReceitaDespesa[];
  despesaTotal: number;
  receitaTotal: number;
  morador: Morador;

  displayedColumns: string[] = [
    "tipo",
    "descricao",
    "valor",
    "periodo",
    "dataLancamento",
    "dataVencimentoRecebimento",
    "acoes"
  ];

  constructor(
    private router: Router,
    private receitaDespesaService: ReceitadespesaService,
    private dialog: MatDialog,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.despesaTotal = 0;
    this.receitaTotal = 0;

    this.receitaDespesaService.findReceitaDespesaByMorador(this.morador).subscribe(data => {
      this.receitaDespesas = data;
      this.receitaDespesas.forEach(element => {
        if (element.tipo === "Despesa") {
          this.despesaTotal += element.valor;
        } else {
          this.receitaTotal += element.valor;
        }
      });
    });
  }

  onCreate() {
    let receitaDespesa = new ReceitaDespesa();
    this.receitaDespesaService.setReceitaDespesa(receitaDespesa);
    this.router.navigate(["/republicas/addreceitasdespesas"]);
  }

  onUpdate(recd: ReceitaDespesa) {
    this.receitaDespesaService.setReceitaDespesa(recd);
    this.router.navigate(["/republicas/addreceitasdespesas"]);
  }

  onEstornar(recd: ReceitaDespesa) {
    const dialogRef = this.dialog.open(RepublicaFinancasDialogComponent, {
      width: "600px",
      data: recd
    });
  }

  viewChart() {
    this.router.navigate(['republica/financas/grafico']);
  }

}

@Component({
  selector: "app-republica-financas-dialog",
  templateUrl: "republica-financas-dialog.component.html"
})
export class RepublicaFinancasDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RepublicaFinancasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReceitaDespesa,
    private receitaDespesaService: ReceitadespesaService
  ) {}

  onConfirmarEstorno(recd: ReceitaDespesa) {
    this.receitaDespesaService.estornar(recd)
      .subscribe();
    alert('Transacao estornada com sucesso!');
  }
}
