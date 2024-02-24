import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../types';

@Component({
  selector: 'app-food-form',

  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss'],
})
export class FoodFormComponent implements OnInit {
  @Input() buttonText = 'Submit';
  @Input() titleText = 'Food Information';
  @Input() currentFood: Food | undefined;
  @Output() onSubmit = new EventEmitter<Food>();

  food: Food = {
    id: undefined,
    ref: '',
    description: '',
    chef: '',
    price: 0,
  };

  ngOnInit(): void {
    if (this.currentFood) {
      this.food = this.currentFood;
    }
  }

  onButtonClicked(): void {
    this.onSubmit.emit(this.food);
  }

}
