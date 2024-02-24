export interface Food {
    id: number | undefined;
    ref: string;
    description: string;
    chef: string;
    price: number;
  }
  
  export interface Order {
    id: number;
    foodRef: string;
    foodDescription: string;
    foodPrice: number;
    quantity: number;
    status: OrderStatus;
  }
  
  export enum OrderStatus {
    ACCEPTED = 'Accepted',
    REJECTED = 'Rejected',
    DISPATCHED = 'Dispatched',
  }
  
  export interface OrderRequest {
    ref: string;
    quantity: number;
  }
  
  export interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    roles: string[];
  }
  