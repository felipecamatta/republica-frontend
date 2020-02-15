import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepublicaListComponent } from './republica-list/republica-list.component';
import { RepublicaFormComponent } from './republica-form/republica-form.component';
import { RepublicadisponivelListComponent } from './republica-disponivel-list/republica-disponivel-list.component';
import { RepublicaReceitaDespesaFormComponent } from './republica-receita-despesa-form/republica-receita-despesa-form.component';
import { MoradorFormComponent } from './morador-form/morador-form.component';
import { RepublicaMoradoresComponent } from './republica-moradores/republica-moradores.component';
import { RepublicaFinancasComponent } from './republica-financas/republica-financas.component';
import { MoradorFinancasComponent } from './morador-financas/morador-financas.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { MoradorListComponent } from './morador-list/morador-list.component';
import { TarefaListComponent } from './tarefa-list/tarefa-list.component';
import { TarefaFormComponent } from './tarefa-form/tarefa-form.component';
import { LoginComponent } from './login/login.component';
import { RepublicaFinancasGraficoComponent } from './republica-financas-grafico/republica-financas-grafico.component';

const routes: Routes = [
  { path: 'republicas', component: RepublicaListComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'addrepublica', component: RepublicaFormComponent },
  { path: 'republicas/disponiveis', component: RepublicadisponivelListComponent },
  { path: 'republicas/addreceitasdespesas', component: RepublicaReceitaDespesaFormComponent },
  { path: 'republica/financas', component: RepublicaFinancasComponent },
  { path: 'republica/financas/grafico', component: RepublicaFinancasGraficoComponent },
  { path: 'morador/financas', component: MoradorFinancasComponent },
  { path: 'addmorador', component: MoradorFormComponent },
  { path: 'morador', component: MoradorFormComponent },
  { path: 'republicas/moradores', component: RepublicaMoradoresComponent },
  { path: 'feedback', component: FeedbackListComponent },
  { path: 'addfeedback', component: FeedbackFormComponent },
  { path: 'republicas/moradores', component: RepublicaMoradoresComponent },
  { path: 'moradores', component: MoradorListComponent },
  { path: 'tarefas', component: TarefaListComponent },
  { path: 'addtarefa', component: TarefaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
