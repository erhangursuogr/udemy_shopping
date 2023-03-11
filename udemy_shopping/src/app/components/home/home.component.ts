import { Component } from '@angular/core';
import { BasketModel } from 'src/app/models/basketModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  baskets: BasketModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getBaskets(event: any) {
    this.baskets = event.data;
  }

}