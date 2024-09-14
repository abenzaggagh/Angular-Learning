import {Component, inject} from '@angular/core';
import {NotificationsService} from "../../service/notifications.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-notifications-manager-service',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './notifications-manager-service.component.html',
  styleUrl: './notifications-manager-service.component.css'
})
export class NotificationsManagerServiceComponent {

  notificationCount$;

  constructor(private notificationService: NotificationsService) {
    this.notificationCount$ = this.notificationService.count$;
  }
  // notificationService: NotificationsService = inject(NotificationsService)


  addNotification() {
    this.notificationService.setCount(this.notificationCount$.getValue() + 1);
  }

  removeNotification() {
    if (this.notificationCount$.getValue() == 0) {
      return;
    }
    this.notificationService.setCount(this.notificationCount$.getValue() - 1);
  }

  resetNotifications() {
    this.notificationService.setCount(0);
  }
}
