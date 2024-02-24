import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { AddNewFoodComponent } from './add-new-food/add-new-food.component';
import { OrderListComponent } from './order-list/order-list.component';
import { EditFoodComponent } from './edit-food/edit-food.component';

const routes: Routes = [
  { path: 'browse-food', component: FoodListComponent, pathMatch: 'full' },
  { path: 'add-food', component: AddNewFoodComponent },
  { path: 'edit-food/:ref', component: EditFoodComponent },
  { path: 'my-orders', component: OrderListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
