import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  standalone: false,
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  filteredCategories: any[] = [];
  search = '';
  playerName = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
      this.filteredCategories = data;
    });

    this.route.params.subscribe((params) => {
      this.playerName = params['playerName'];
    });
  }

  filterCategories() {
    this.filteredCategories = this.categories.filter((c) =>
      c.categoryLabel.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  resetFilter() {
    this.search = '';
    this.filteredCategories = this.categories;
  }

  goToQuiz(categoryId: number) {
    this.router.navigate(['/quiz', categoryId, this.playerName]);
  }
}
