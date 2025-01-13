import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedCategories: any[] = [];
  isLoading: boolean = false;

  constructor(
    private _CategoryService: CategoryService,
    private _SharedService: SharedService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    // تحميل الكتالوجات الافتراضية عند بدء التشغيل
    this.loadCategories('default');

    // الاستماع لأي تغييرات من SharedService
    this._SharedService.catalogs$.subscribe((catalogs) => {
      if (catalogs.length > 0) {
        this.displayedCategories = catalogs;
      }
    });
  }

  loadCategories(filterType: 'default' | 'bestSelling'): void {
    this.isLoading = true;
    this._CategoryService.getMainCategories().subscribe(
      (categories) => {
        if (filterType === 'bestSelling') {
          this.displayedCategories = categories
            .filter((category) => category.isBestSelling) // الأكثر مبيعًا
            .slice(0, 6); // أول 5 فقط
        } else {
          this.displayedCategories = categories.slice(0, 6); // أول 5 كتالوجات
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading categories:', error);
        this.isLoading = false;
      }
    );
  }

  // loadCategories(): void {
  //   this._CategoryService.getMainCategories().subscribe((categories) => {
  //     this.displayedCategories = categories.slice(0, 5);
  //     // عرض أول 5 كتالوجات فقط
  //     // يمكن تعديل slice أو إضافة فلترة حسب الحاجة
  //   });
  // }

  // loadBestSelling(): void {
  //   this._CategoryService.getMainCategories().subscribe((categories) => {
  //     this.displayedCategories = categories
  //       .filter((category) => category.isBestSelling) // فلترة للأكثر مبيعًا
  //       .slice(0, 5); // أول 5 فقط
  //   });
  // }

  handleCategoryClick(category: any): void {
    if (category.hasSubCategories) {
      this._Router.navigate([`/${category.name}/${category.id}`]);
    } else {
      this._Router.navigate([`/category/${category.id}/products`]);
    }
  }
}
