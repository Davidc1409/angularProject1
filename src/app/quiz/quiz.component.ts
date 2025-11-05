import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/services/quiz.service";
import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { CategoryService } from "../shared/services/category.service";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: false
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  currentCategoryId: string = '';
  currentCategoryName : string = '';

  // @Input() categoryId: string = '';
  // @Output() categorySelected = new EventEmitter();

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
      this.currentCategoryId = params['categoryId'];
      // this.quizService.categoryId =  this.currentCategoryId;
      this.categoryService.getCategoryById(parseInt(this.currentCategoryId)).subscribe((res : any) =>{
        console.log(res)
        this.currentCategoryName = res.categoryLabel;
      });
    });

  }


  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
