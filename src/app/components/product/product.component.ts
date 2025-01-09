import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  categoryId: number | null = null;
  productsList: Product[] = [];

  constructor(
    private _CategoryService: CategoryService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.categoryId = +this._ActivatedRoute.snapshot.paramMap.get('id')!;
    this.loadProducts();
  }

  loadProducts() {
    if (this.categoryId !== null) {
      this.productsList = this._CategoryService.getProductsByCategoryId(
        this.categoryId
      );
    }
  }
}
