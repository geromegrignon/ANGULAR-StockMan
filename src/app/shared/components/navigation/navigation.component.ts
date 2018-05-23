import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public links: {name: string, path: string, icon: string}[] = [
    {name: 'Articles', path: 'supply', icon: 'description'},
    {name: 'Fournisseurs', path: 'provider', icon: 'assignment_ind'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
