import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatBadgeModule } from "@angular/material/badge";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { AppComponent } from "./app.component";
import {
  RepublicaListComponent,
  RepublicaListDialogComponent
} from "./republica-list/republica-list.component";
import { RepublicaFormComponent } from "./republica-form/republica-form.component";

import { RepublicaService } from "./services/republica.service";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule } from "@angular/material/list";
import { RepublicadisponivelListComponent } from "./republica-disponivel-list/republica-disponivel-list.component";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { RepublicaReceitaDespesaFormComponent } from "./republica-receita-despesa-form/republica-receita-despesa-form.component";
import { MatRadioModule } from "@angular/material/radio";
import {
  RepublicaFinancasComponent,
  RepublicaFinancasDialogComponent
} from "./republica-financas/republica-financas.component";
import { MoradorFinancasComponent } from "./morador-financas/morador-financas.component";
import { MoradorFormComponent } from "./morador-form/morador-form.component";
import { RepublicaMoradoresComponent } from "./republica-moradores/republica-moradores.component";
import { NotificacaoListDialogComponent } from "./notification-list-dialog/notificacao-list-dialog.component";
import { SolicitacaoService } from "./services/solicitacao.service";
import { FeedbackFormComponent } from "./feedback-form/feedback-form.component";
import { FeedbackListComponent } from "./feedback-list/feedback-list.component";
import { LoginService } from "./services/login.service";
import { MoradorListComponent } from './morador-list/morador-list.component';
import { HistoricoDialogComponent } from './historico-dialog/historico-dialog.component';
import { TarefaListComponent } from './tarefa-list/tarefa-list.component';
import { TarefaFormComponent } from './tarefa-form/tarefa-form.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RepublicaFinancasGraficoComponent } from './republica-financas-grafico/republica-financas-grafico.component';
import { RepublicaReceitaDespesaListComponent } from './republica-receita-despesa-list/republica-receita-despesa-list.component';
import { HttpInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RepublicaListComponent,
    RepublicaFormComponent,
    RepublicadisponivelListComponent,
    MainNavComponent,
    RepublicaListDialogComponent,
    RepublicaReceitaDespesaFormComponent,
    RepublicaFinancasComponent,
    MoradorFinancasComponent,
    MoradorFormComponent,
    RepublicaMoradoresComponent,
    NotificacaoListDialogComponent,
    FeedbackFormComponent,
    FeedbackListComponent,
    RepublicaFinancasDialogComponent,
    RepublicaFinancasGraficoComponent,
    RepublicaReceitaDespesaListComponent,
    MoradorListComponent,
    HistoricoDialogComponent,
    TarefaListComponent,
    TarefaFormComponent,
    LoginComponent,
    LogoutComponent
  ],
  entryComponents: [
    RepublicaListDialogComponent,
    NotificacaoListDialogComponent,
    RepublicaFinancasDialogComponent,
    HistoricoDialogComponent
  ],
  imports: [
    MatSidenavModule,
    MatBadgeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCheckboxModule
  ],
  providers: [RepublicaService, SolicitacaoService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
