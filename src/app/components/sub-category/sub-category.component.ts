import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {
  subCategories: any[] = [];

  constructor(
    private _CategoryService: CategoryService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    const mainCategory = +this._ActivatedRoute.snapshot.paramMap.get('id')!;
    // احصل على ID الكتالوج من الاكتيف راوتر
    this._CategoryService
      .getSubcategories(mainCategory - 1)
      .subscribe((subcategories) => {
        this.subCategories = subcategories || [];
      });
  }

  goToProducts(subCategory: any): void {
    this._Router.navigate([`/category/${subCategory.id}/products`]);
  }
}
