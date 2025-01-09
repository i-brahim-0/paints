import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = false;
  categories: any[] = [];

  constructor(private _Router: Router, private _SharedService: SharedService) {
    this._SharedService.catalogs$.subscribe((catalogs) => {
      this.categories = catalogs; // استقبال البيانات عند تحديثها
    });
  }

  ngOnInit() {}

  viewProducts(catalogId: number) {
    this._Router.navigate([`/category/${catalogId}/products`]);
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
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
