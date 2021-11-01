import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesInService: any[] = ["Sony","Phillips","LG"];

  constructor() { }
}
