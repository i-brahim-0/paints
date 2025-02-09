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
  mainCategory: string = '';

  constructor(
    private _CategoryService: CategoryService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      const mainCategoryId = +params.get('id')!;
      this.mainCategory= params.get('categryName')!;
      console.log(this.mainCategory);
      this._CategoryService
        .getSubcategories(mainCategoryId - 1)
        .subscribe((subcategories) => {
          this.subCategories = subcategories || [];
        });
    });
  }

  goToProducts(subCategory: any): void {
    this._Router.navigate([`/category/${subCategory.id}/products`]);
  }
}
