export interface Category {
  id: number;
  name: string;
  hasSubCategories: boolean;
  subCategories?: Category[];
  shortDescription?: string;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  categoryId: number; // ID الكتالوج المرتبط
}
