import { Food, Order, OrderStatus } from "./types";

export const fakeFood: Food[] = [{
    id: 1,
    ref: '1234567890',
    description: 'Hot Pizza',
    chef: 'John',
    price: 19.90,
}, {
    id: 2,
    ref: '1234567891',
    description: 'Pasta Cosi',
    chef: 'Rick',
    price: 19.90,
}, {
    id: 3,
    ref: '1234567892',
    description: 'Lasagna',
    chef: 'Ron',
    price: 19.90
}];

export const fakeOrders: Order[] = [{
    id: 42,
    foodRef: '1234567890',
    foodDescription: 'Hot Pizza',
    foodPrice: 19.90,
    quantity: 3,
    status: OrderStatus.ACCEPTED
}, {
    id: 43,
    foodRef: '1234567891',
    foodDescription: 'Pasta Cosi',
    foodPrice: 19.90,
    quantity: 2,
    status: OrderStatus.DISPATCHED
}, {
    id: 44,
    foodRef: '1234567892',
    foodDescription: 'Lasagna',
    foodPrice: 19.90,
    quantity: 1,
    status: OrderStatus.REJECTED
}];
