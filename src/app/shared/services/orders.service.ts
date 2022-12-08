import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, map } from 'rxjs';
import { Order } from '../models/order.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const { firebaseURL } = environment;

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private ordersSubject: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(null);
  orders$: Observable<Order[]> = this.ordersSubject.asObservable();

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<Order[]>(`${firebaseURL}/orders.json`).pipe(
      map(orders => orders ? orders : []),
      tap(orders => this.ordersSubject.next(orders))
    );
  }

  newOrder(newOrder: Order) {
    const orders = this.ordersSubject.getValue().slice();
    orders.push(newOrder);
    return this.http.put<Order[]>(`${firebaseURL}/orders.json`, orders).pipe(
      tap(orders => this.ordersSubject.next(orders))
    )
  }
}
