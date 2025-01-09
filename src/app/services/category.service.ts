import { Injectable } from '@angular/core';
import { Category, Product } from '../interfaces/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  private categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      hasSubCategories: true,
      subCategories: [
        { id: 101, name: 'Mobiles', hasSubCategories: false },
        { id: 102, name: 'Laptops', hasSubCategories: false },
      ],
    },
    {
      id: 2,
      name: 'Furniture',
      hasSubCategories: false,
    },
  ];

  private products: Product[] = [
    // منتجات مرتبطة بالقسم الفرعي "Mobiles"
    {
      id: 1001,
      name: 'iPhone 14',
      price: 999.99,
      categoryId: 101, // Mobiles
    },
    {
      id: 1002,
      name: 'Samsung Galaxy S23',
      price: 849.99,
      categoryId: 101,
    },
    // منتجات مرتبطة بالقسم الفرعي "Laptops"
    {
      id: 1003,
      name: 'MacBook Pro 16"',
      price: 2499.99,
      categoryId: 102, // Laptops
    },
    {
      id: 1004,
      name: 'Dell XPS 13',
      price: 1199.99,
      categoryId: 102,
    },
    // منتجات مرتبطة بالقسم الرئيسي "Furniture"
    {
      id: 1005,
      name: 'Wooden Dining Table',
      price: 299.99,
      categoryId: 2, // Furniture
    },
    {
      id: 1006,
      name: 'Leather Sofa',
      price: 499.99,
      categoryId: 2,
    },
  ];

  // جلب الأقسام الرئيسية
  getMainCategories(): Observable<any[]> {
    // جلب الكتالوجات الرئيسية فقط (التي لها أو ليس لها أقسام فرعية)
    const mainCategories = this.categories.map(
      ({ subCategories, ...category }) => category
    );
    return of(mainCategories);
  }

  getSubCategories(): Observable<any[]> {
    const subCategories = this.categories
      .filter((category) => category.hasSubCategories)
      .flatMap((category) => category.subCategories || []);
    return of(subCategories);
  }

  // دالة لجلب القسم بناءً على ID
  getCategoryById(id: number): any {
    return this.findCategoryById(this.categories, id);
  }

  // دالة مساعدة للبحث في الأقسام المتداخلة
  findCategoryById(categories: any[], id: number): any {
    for (let category of categories) {
      if (category.id === id) {
        return category;
      }
      if (category.subCategories && category.subCategories.length > 0) {
        const subCategory = this.findCategoryById(category.subCategories, id);
        console.log(subCategory);
        if (subCategory) {
          return subCategory;
        }
      }
    }
    return null;
  }
  // OR

  // جلب المنتجات بناءً على ID الكتالوج
  getProductsByCategoryId(catalogId: number): Product[] {
    return this.products.filter((product) => product.categoryId === catalogId);
  }
}
