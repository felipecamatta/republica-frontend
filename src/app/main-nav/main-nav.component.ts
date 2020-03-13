import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { MoradorService } from "../services/morador.service";
import { MatDialog } from "@angular/material/dialog";
import { Morador } from "../models/morador";
import { SolicitacaoService } from "../services/solicitacao.service";
import { Solicitacao } from "../models/solicitacao";
import { NotificacaoListDialogComponent } from "../notification-list-dialog/notificacao-list-dialog.component";
import { LoginService } from "../services/login.service";
import { Feedback } from "../models/feedback";
import { FeedbackService } from "../services/feedback.service";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"]
})
export class MainNavComponent implements OnInit {
  morador: Morador;
  moradores: Morador[] = [];
  solicitacoes: Solicitacao[] = [];
  feedbacks: Feedback[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private loginService: LoginService,
    private moradorService: MoradorService,
    private solicitacaoService: SolicitacaoService,
    private feedbackService: FeedbackService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.moradorService.findAll().subscribe(data => {
      this.moradores = data;
    });

    this.morador = this.loginService.getMorador();

    this.atualizarListaSolicitacoes();
    this.atualizarListaFeedbacks();
  }

  onChange(value: Morador) {
    this.loginService.setMorador(value);
    this.solicitacaoService.setMorador(value);

    this.ngOnInit();
  }

  visualizarNotificacoes(): void {
    const dialogRef = this.dialog.open(NotificacaoListDialogComponent, {
      width: "600px",
      data: {
        solicitacoes: this.solicitacoes,
        feedbacks: this.feedbacks
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.atualizarListaSolicitacoes();
    });
  }

  totalNotificacoes(): number {
    return this.solicitacoes.length + this.feedbacks.length;
  }

  atualizarListaSolicitacoes() {
    this.solicitacaoService.findAll(this.morador.id).subscribe(data => {
      this.solicitacoes = data;
    });
  }

  atualizarListaFeedbacks() {
    this.feedbackService.findByMorador(this.morador).subscribe(data => {
      this.feedbacks = [];
      data.forEach(feedback => {
        if (feedback.status === "RESOLUCAO SOLICITADA") {
          this.feedbacks.push(feedback);
        }
      });
    });
  }
}
