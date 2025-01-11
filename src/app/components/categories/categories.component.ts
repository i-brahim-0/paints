import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(
    private _CategoryService: CategoryService,
    private _Router: Router,
    private _SharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this._SharedService.setCatalogs(this.categories); // إرسال البيانات للخدمة المشتركة
  }

  goToSubCategory(category: any): void {
    if (category.hasSubCategories) {
      if (category.subCategories.length > 0) {
        this._Router.navigate([`/category/${category.id}/subcategories`]);
      }
    } else {
      this._Router.navigate([`/category/${category.id}/products`]);
    }
  }

  loadCategories(): void {
    this._CategoryService.getMainCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
