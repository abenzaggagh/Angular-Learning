import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  count$ = new BehaviorSubject(0);

  setCount(count: number) {
    this.count$.next(count);
  }
}
