import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsInService: any[] = [
      {pealkiri: 'ese1', hind: 100 },
      {pealkiri: 'ese2', hind: 200 },
      {pealkiri: "ese3", hind: 300 }
    ];


  constructor() { }
}
