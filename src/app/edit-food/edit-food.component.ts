import { Component, OnInit } from '@angular/core';
import { Food } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss'],
})
export class EditFoodComponent implements OnInit {
  food!: Food;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('ref') as string;
    this.foodService.getFoodByRef(isbn).subscribe((res) => (this.food = res));
  }

  onSubmit(food: Food): void {
    this.foodService.editFood(food).subscribe(() => {
      this.router.navigateByUrl('/browse-food');
    });
  }
}
