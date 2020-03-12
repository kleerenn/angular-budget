import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../share/model/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }
  addItem(item: BudgetItem) {
    this.budgetItems.push(item)
  }
  deleteItem(item) {
    let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index, 1)
  }

}
