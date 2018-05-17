import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public links: {name: string, path: string, icon: string}[] = [
    {name: 'Fournitures', path: 'supply', icon: 'description'},
    {name: 'Commande', path: 'cart', icon: 'shopping_cart'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
