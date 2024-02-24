import { Component, OnInit } from '@angular/core';
import { Food } from '../types';
import { FoodService } from '../food.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

@Component({
  selector: 'app-food-list',

  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  food: Food[] = [];

  colNumber = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => (matches ? 2 : 3)));

  constructor(
    public dialog: MatDialog,
    private foodService: FoodService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.foodService.getFood().subscribe((res) => (this.food = res));
  }

  removeFood(ref: string): void {
    this.foodService.deleteFood(ref)
      .subscribe(() => {
        this.router.navigateByUrl('/browse-food');
      });
  }

  createOrder(food: Food): void {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '250px',
      data: food
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigateByUrl('/my-orders');
    });
  }


}
