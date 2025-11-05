import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
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

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
      this.filteredCategories = data;
    });
  }

  filterCategories() {
    this.filteredCategories = this.categories.filter((c) =>
      c.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  resetFilter() {
    this.search = '';
    this.filteredCategories = this.categories;
  }

  goToQuiz(categoryId: number) {
    //const playerName = localStorage.getItem('playerName') || 'Joueur';
    //this.router.navigate(['/quiz', categoryId, playerName]);
  }
}
