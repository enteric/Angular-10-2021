import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  esemed: any[] = [];

  lisatud = false;

  constructor(private cartService: CartService,
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.esemed = this.itemService.itemsInService;
    console.log("olen home componendis");
    console.log(this.esemed);
    // parem klõps lehel
    // inspect (inspekteeri)
    // console tääb 
  }

  ostukorviLisamine(eseMillePealeKlikiti: any){
    // console.log("töötab");
    // console.log(this.esemed);
    // this.esemed[1].hind = "150"; 
    // this.lisatud = true;
    // this.esemed.push(eseMillePealeKlikiti);
    this.cartService.cartItemsInService.push(eseMillePealeKlikiti);
  }
}
