import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/feedback';
import { Republica } from '../models/republica';
import { RepublicaService } from '../services/republica.service';
import { Morador } from '../models/morador';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  morador: Morador;
  feedbacks: Feedback[];

  displayedColumns: string[] = ['id', 'morador', 'republica', 'status',
    'tipo', 'descricao', 'dataFeedback', 'dataSolucao', 'acoes'];

  constructor(private route: ActivatedRoute, private router: Router,
    private feedbackService: FeedbackService,
    private loginService: LoginService) {
    this.morador = this.loginService.getMorador();
  }

  ngOnInit() {
    this.feedbackService.findByRepublica(this.morador.republica).subscribe(data => {
      this.feedbacks = data;
    });
  }

  onUpdate(feedback: Feedback) {
    this.feedbackService.setFeedback(feedback);
    this.router.navigate(['/addfeedback']);
  }

  onDelete(feedback: Feedback) {
    if (confirm("Deseja realmente excluir?")) {
      if (this.morador.representante) {
        feedback.status = 'EXCLUIDO';
      } else {
        feedback.status = 'EXCLUSAO SOLICITADA';
      }

      this.feedbackService.update(feedback).subscribe(result => {
        alert('O status do feedback foi atualizado!');
        this.ngOnInit();
      });
    }
  }

  finalizar(feedback: Feedback) {
    if (this.morador.representante && feedback.status === 'RESOLUCAO SOLICITADA') {
      feedback.status = 'RESOLVIDA';
    } else {
      feedback.dataSolucao = new Date();
      feedback.status = 'RESOLUCAO SOLICITADA';
    }

    this.feedbackService.update(feedback).subscribe(result => {
      alert('O status do feedback foi atualizado!');
      this.ngOnInit();
    });
  }

  onCreate() {
    let feedback = new Feedback();
    feedback.republica = this.morador.republica;
    this.feedbackService.setFeedback(feedback);
    this.router.navigate(['/addfeedback']);
  }

}

