import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {
  public nombres = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }


}
