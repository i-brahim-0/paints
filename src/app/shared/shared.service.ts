import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private categoriesSource = new BehaviorSubject<any[]>([]); // BehaviorSubject لتخزين البيانات ومتابعتها
  catalogs$ = this.categoriesSource.asObservable(); // Observable لمتابعة التحديثات

  constructor() {
    this.setCatalogs([]); // تهيئة البيانات
  }

  setCatalogs(catalogs: any[]) {
    this.categoriesSource.next(catalogs); // تحديث البيانات
  }
}
