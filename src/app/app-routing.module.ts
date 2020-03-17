import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepublicaFormComponent } from './republica-form/republica-form.component';
import { RepublicadisponivelListComponent } from './republica-disponivel-list/republica-disponivel-list.component';
import { MoradorFormComponent } from './morador-form/morador-form.component';
import { RepublicaFinancasComponent } from './republica-financas/republica-financas.component';
import { MoradorFinancasComponent } from './morador-financas/morador-financas.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { MoradorListComponent } from './morador-list/morador-list.component';
import { TarefaFormComponent } from './tarefa-form/tarefa-form.component';
import { RepublicaGerenciaComponent } from './republica-gerencia/republica-gerencia.component';
import { RepublicaFinancasGraficoComponent } from './republica-financas-grafico/republica-financas-grafico.component';
import { MoradorGerenciaComponent } from './morador-gerencia/morador-gerencia.component';
import { RepublicaTarefaComponent } from './republica-tarefa/republica-tarefa.component';
import { MoradorTarefaComponent } from './morador-tarefa/morador-tarefa.component';
import { ReceitaDespesaFormComponent } from './receita-despesa-form/receita-despesa-form.component';

const routes: Routes = [
  { path: 'addrepublica', component: RepublicaFormComponent },
  { path: 'republicas/disponiveis', component: RepublicadisponivelListComponent },
  { path: 'republicas/addreceitasdespesas', component: ReceitaDespesaFormComponent },
  { path: 'republica/financas', component: RepublicaFinancasComponent },
  { path: 'republica/financas/grafico', component: RepublicaFinancasGraficoComponent },
  { path: 'morador/financas', component: MoradorFinancasComponent },
  { path: 'addmorador', component: MoradorFormComponent },
  { path: 'morador/perfil', component: MoradorGerenciaComponent },
  { path: 'feedback', component: FeedbackListComponent },
  { path: 'addfeedback', component: FeedbackFormComponent },
  { path: 'moradores', component: MoradorListComponent },
  { path: 'republica/tarefas', component: RepublicaTarefaComponent },
  { path: 'morador/tarefas', component: MoradorTarefaComponent },
  { path: 'addtarefa', component: TarefaFormComponent },
  { path: 'republica/gerencia', component: RepublicaGerenciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
