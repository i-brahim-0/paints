import { Injectable } from '@angular/core';
import { Category, Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  private categories: Category[] = [
    {
      id: 1,
      name: 'اضافات الخرسانة',
      parentId: null,
      shortDescription: 'اختصار قصير لمحتوى القسم',
    },
    {
      id: 2,
      name: 'الأرضيات الصناعية',
      parentId: null,
      shortDescription: 'اختصار قصير لمحتوى القسم',
    },
    {
      id: 3,
      name: 'مواد الترمیم والإصلاح',
      parentId: null,
      shortDescription: 'اختصار قصير لمحتوى القسم',
    },
    {
      id: 4,
      name: 'الارضيات الاسمنتية',
      parentId: 2,
      shortDescription: 'اختصار قصير لمحتوى القسم',
    },
    {
      id: 5,
      name: 'الارضيات الايبوكسية',
      parentId: 2,
      shortDescription: 'اختصار قصير لمحتوى القسم',
    },
    {
      id: 6,
      name: 'أرضيات الملاعب',
      parentId: 2,
      shortDescription: 'اختصار قصير لمحتوى القسم',
    },
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'نيرو كريت دبليو بى',
      categoryId: 1,
      description: 'إضافة سائلة بنية اللون خالية من الكلوريدات ',
      price: 1500,
    },
    {
      id: 2,
      name: 'نيرو بـوند',
      categoryId: 1,
      description: 'مستحلب أبيض من الاسترين بيوتادين المعدل.',
      price: 800,
    },

    {
      id: 3,
      name: 'نيــرو هـارد تـوب',
      categoryId: 3,
      description: 'خليط جاهز للاستعمال مكون من أسمنت و إضافات وركام صلب.',
      price: 300,
    },
    {
      id: 4,
      name: 'نيــرو ميتـال تـوب',
      categoryId: 3,
      description: 'خليط جاهز للاستعمال مكون من أسمنت و إضافات وركام معدني',
      price: 150,
    },
    {
      id: 5,
      name: 'نيرو هارد توب',
      categoryId: 2,
      description: 'خليط جاهز للاستعمال مكون من أسمنت و إضافات وركام معدني',
      price: 150,
    },
    {
      id: 6,
      name: 'نيرو كوراندم',
      categoryId: 2,
      description: 'خليط جاهز للاستعمال مكون من أسمنت و إضافات وركام معدني',
      price: 150,
    },
    {
      id: 7,
      name: 'نيــرو ميتـال تـوب',
      categoryId: 3,
      description: 'خليط جاهز للاستعمال مكون من أسمنت و إضافات وركام معدني',
      price: 150,
    },
    {
      id: 8,
      name: 'نيرو سيمنت سيلف',
      categoryId: 3,
      description: 'خليط جاهز للاستعمال مكون من أسمنت و إضافات وركام معدني',
      price: 150,
    },
  ];

  // جلب الأقسام الرئيسية
  getMainCategories(): Category[] {
    return this.categories.filter((catalog) => catalog.parentId === null);
  }

  // جلب الأقسام الفرعية
  getSubCategories(parentId: number): Category[] {
    return this.categories.filter((catalog) => catalog.parentId === parentId);
  }

  // جلب المنتجات بناءً على ID الكتالوج
  getProductsByCategoryId(catalogId: number): Product[] {
    return this.products.filter((product) => product.categoryId === catalogId);
  }
}
