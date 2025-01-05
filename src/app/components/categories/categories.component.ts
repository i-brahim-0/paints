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
    // this.categories = this._CategoryService.getMainCategories();
    // OR
    this.categories = this._CategoryService.getMainCategories(); // استخدام الخدمة لجلب الكتالوجات
    this._SharedService.setCatalogs(this.categories); // إرسال البيانات للخدمة المشتركة
  }

  viewProducts(catalogId: number) {
    this._Router.navigate([`/category/${catalogId}/products`]);
  }
}
