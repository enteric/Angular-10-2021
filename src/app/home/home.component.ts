import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  esemed = [
    {pealkiri: 'ese1', hind: 100 },
    {pealkiri: 'ese2', hind: 200 },
    {pealkiri: "ese3", hind: 300 }
  ];
  lisatud = false;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("olen home componendis");
  }

  ostukorviLisamine(eseMillePealeKlikiti: any){
  // console.log("töötab");
  // console.log(this.esemed);
  // this.esemed[1].hind = "150";
  // this.lisatud = true;
  // this.esemed.push(eseMillePealeKlikiti);
  this.cartService.cartItemsInService.push(eseMillePealeKlikiti)
  }
  
}
