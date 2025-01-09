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

  loadCategories(): void {
    this._CategoryService.getMainCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  handleCategoryClick(category: any): void {
    if (category.hasSubCategories) {
      // التوجيه إلى الأقسام الفرعية
      console.log(`Navigate to Subcategories for Category ID: ${category.id}`);
      this._Router.navigate([`/category/${category.id}/subcategories`]);
    } else {
      // التوجيه إلى المنتجات
      console.log(`Navigate to Products for Category ID: ${category.id}`);
      this._Router.navigate([`/category/${category.id}/products`]);
    }
  }
}
