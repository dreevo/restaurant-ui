import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}

  getFood(): Observable<Food[]> {
    return this.httpClient.get<Food[]>('/food');
  }

  getFoodByRef(ref: string): Observable<Food> {
    return this.httpClient.get<Food>(`/food/${ref}`);
  }

  addFood(food: Food): Observable<Food> {
    return this.httpClient.post<Food>(`/food`, food, httpOptions);
  }

  editFood(food: Food): Observable<Food> {
    return this.httpClient.put<Food>(`/food/${food.ref}`, food, httpOptions);
  }

  deleteFood(ref: string): Observable<any> {
    return this.httpClient.delete<any>(`/food/${ref}`);
  }
}
