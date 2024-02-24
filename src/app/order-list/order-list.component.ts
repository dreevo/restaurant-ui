import { Component } from '@angular/core';
import { Order } from '../types';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',

  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  orders: Order[] = [];

  colNumber = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => (matches ? 2 : 3)));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => (this.orders = orders));
  }
}
