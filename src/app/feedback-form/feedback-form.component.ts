import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../services/feedback.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  feedback: Feedback;

  constructor(private router: Router,
              private loginService: LoginService,
              protected feedbackService: FeedbackService) { 
    this.feedback = feedbackService.getFeedback();
  }

  ngOnInit() {
    this.feedback = this.feedbackService.getFeedback();
    this.feedback.morador = this.loginService.getMorador();
  }

  onSubmit() {
    this.feedback.morador = this.loginService.getMorador();
    if (this.feedback.id === undefined) {
      this.feedbackService.save(this.feedback).subscribe(result => {
        this.router.navigate(['/feedback']);
        alert('Feedback adicionado com sucesso!');
      });
    } else {
      this.feedbackService.update(this.feedback).subscribe(result => {
        this.router.navigate(['/feedback']);
        alert('Feedback editado com sucesso!');
      });
    }
  }
}
