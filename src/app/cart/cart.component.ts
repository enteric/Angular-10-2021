import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  pealkiri1 = "Ese1";
  pealkiri2 = "Ese2";
  pealkiri3 = "Ese3";

  hind1 = 10;
  hind2 = 20;
  hind3 = 30;

  aktiivne1= true;
  aktiivne2= false;
  aktiivne3= true;

  pealkirjad = ["Ese1", "Ese2", "Ese3"];
  hinnad = [10,25,40];
  aktiivsused = [true, false, true];

  Ese1 = {pealkiri: "Ese1", hind: 10, aktiivne: true}
  Ese2 = {pealkiri: "Ese2", hind: 25, aktiivne: false}
  Ese3 = {pealkiri: "Ese3", hind: 40, aktiivne: true}

  esemed = [
    {pealkiri: "Ese1", hind: 10, aktiivne: true},
    {pealkiri: "Ese2", hind: 25, aktiivne: false},
    {pealkiri: "Ese3", hind: 40, aktiivne: true},
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
