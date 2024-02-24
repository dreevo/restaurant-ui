import { Component, Inject, OnInit } from '@angular/core';
import { Food } from '../types';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-dialog',

  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss'],
})
export class OrderDialogComponent implements OnInit {
  food: Food;
  foodQuantity = 1;

  ngOnInit(): void {}

  constructor(
    public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Food,
    private orderService: OrderService
  ) {
    this.food = data;
  }

  submitOrder(): void {
    const orderRequest = {
      ref: this.food.ref,
      quantity: this.foodQuantity,
    };
    this.orderService
      .submitOrder(orderRequest)
      .subscribe(() => this.dialogRef.close());
  }
}
