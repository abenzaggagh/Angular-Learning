import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NotificationsManagerComponent} from "./components/notifications-manager/notifications-manager.component";
import {
  NotificationsManagerServiceComponent
} from "./components/notifications-manager-service/notifications-manager-service.component";
import {NotificationsService} from "./service/notifications.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationsManagerComponent, NotificationsManagerServiceComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Learning';

  notificationCount$;

  constructor(private notificationService: NotificationsService) {
    this.notificationCount$ = this.notificationService.count$;
  }

  notificationCount = 0;

  updateNotifications(count: number) {
    this.notificationCount = count;
  }

}
