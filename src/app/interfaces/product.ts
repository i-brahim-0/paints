export interface Category {
  id: number;
  name: string;
  hasSubCategories: boolean;
  parentCategoryId?: number;
  subCategories?: Category[];
  shortDescription?: string;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  categoryId: number; // ID الكتالوج المرتبط
  // parentCategoryId: number; // ID الكتالوج الرئيسي
}
