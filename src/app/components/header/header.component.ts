import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = false;
  categories: any[] = [];

  constructor(
    private _Router: Router,
    private _SharedService: SharedService,
    private _CategoryService: CategoryService // إضافة الخدمة هنا
  ) {}

  ngOnInit() {
    this._CategoryService.getMainCategories().subscribe((data) => {
      this.categories = data;
    });

    // استمر في الاستماع لأي تغييرات تأتي من SharedService
    this._SharedService.catalogs$.subscribe((catalogs) => {
      if (catalogs.length > 0) {
        this.categories = catalogs;
      }
    });
  }

  viewProducts(catalogId: number) {
    this._Router.navigate([`/category/${catalogId}/products`]);
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  handleCategoryClick(category: any): void {
    if (category.hasSubCategories) {
      this._Router.navigate([`/${category.name}/${category.id}`]);
    } else {
      this._Router.navigate([`/category/${category.id}/products`]);
    }
  }
}
