import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';
import { Food } from '../types';

@Component({
  selector: 'app-add-new-food',
  templateUrl: './add-new-food.component.html',
  styleUrls: ['./add-new-food.component.scss']
})
export class AddNewFoodComponent implements OnInit{

  constructor(private foodService : FoodService, private router : Router){}


  ngOnInit(): void {
  }

  onSubmit(food: Food): void {
    this.foodService.addFood(food)
      .subscribe(() => {
        this.router.navigateByUrl('/browse-food');
      });
  }

}
