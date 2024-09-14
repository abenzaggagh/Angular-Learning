import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  standalone: true,
  imports: [],
  templateUrl: './notifications-manager.component.html',
  styleUrl: './notifications-manager.component.css'
})
export class NotificationsManagerComponent {

  @Input()
  count = 0;

  @Output()
  countChanged = new EventEmitter<number>();

  addNotification() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  removeNotification() {
    if (this.count == 0) {
      return;
    }
    this.count--;
    this.countChanged.emit(this.count);
  }

  resetNotifications() {
    this.count = 0;
    this.countChanged.emit(this.count);
  }

}
