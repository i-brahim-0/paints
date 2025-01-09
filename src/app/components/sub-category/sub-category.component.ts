import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {
  parentCategory: any;
  subCategories: any[] = [];

  constructor(
    private _CategoryService: CategoryService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this._CategoryService.getSubCategories().subscribe((data) => {
      this.subCategories = data;
    });
  }
  onSubCategoryClick(subCategory: any) {
    if (subCategory.subCategories && subCategory.subCategories.length > 0) {
      this._CategoryService.getCategoryById(subCategory.id);
    }
  }

  handleCategoryClick(category: any): void {
    if (category.subCategories) {
      // التوجيه إلى الأقسام الفرعية
      console.log(
        `Navigate to Subcategories for Subcategory ID: ${category.id}`
      );
      // this._Router.navigate([`/category/${category.id}/subcategories`]);
    } else {
      // التوجيه إلى المنتجات
      console.log(`Navigate to Products for Category ID: ${category.id}`);
      this._Router.navigate([`/category/${category.id}/products`]);
    }
  }
}
