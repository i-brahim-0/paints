export interface Category {
  id: number;
  name: string;
  parentId: number | null; // null للأقسام الرئيسية
  shortDescription?: string;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  categoryId: number; // ID الكتالوج المرتبط
}
