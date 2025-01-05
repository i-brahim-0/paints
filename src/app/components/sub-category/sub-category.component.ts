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
    private _Route: Router
  ) {}

  ngOnInit() {
    // الحصول على معرف الكتالوج الرئيسي من المسار
    // const catalogId = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
    // الحصول على الكتالوج الرئيسي والفرعي
    // this.parentCategory = this._CategoryService
    //   .getMainCategories()
    //   .find((catalog) => catalog.id === catalogId);
    // this.subCategories = this._CategoryService.getSubCategories(catalogId);
  }

  // viewProducts(catalogId: number) {
  //   this._Route.navigate([`/category/${catalogId}/products`]);
  // }
}
