import { QuizService } from "../../shared/services/quiz.service";
import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  standalone: false
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = this.quizService.quizContent;
  // categoryId: string = this.quizService.categoryId;
  @Input() categoryId = '';
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.categoryId = this.categoryId;
    this.quizService.getQuizContentByCategory(this.categoryId);
  }

  addAnswer(answer: string, questionId: number) {
    this.quizService.addAnswer(answer, questionId);
  }
}
