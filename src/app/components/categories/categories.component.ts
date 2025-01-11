import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private _SharedService: SharedService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(() => {
      this.loadCategories();
    });
    this._SharedService.setCatalogs(this.categories); // إرسال البيانات للخدمة المشتركة
  }

  goToSubCategory(category: any): void {
    if (category.hasSubCategories) {
      if (category.subCategories.length > 0) {
        this._Router.navigate([`/${category.name}/${category.id}`]);
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
