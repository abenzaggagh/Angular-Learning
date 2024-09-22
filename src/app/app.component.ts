import {Component, computed, signal, ViewChild} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NotificationsManagerComponent} from "./components/notifications-manager/notifications-manager.component";
import {
  NotificationsManagerServiceComponent
} from "./components/notifications-manager-service/notifications-manager-service.component";
import {NotificationsService} from "./service/notifications.service";
import {AsyncPipe} from "@angular/common";
import {VersionLogsComponent} from "./components/version-logs/version-logs.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {Task, TaskManagerComponent} from "./components/task-manager/task-manager.component";
import {SearchTextComponent} from "./components/search-text/search-text.component";
import {ScrollToDirective} from "./directive/scroll-to.directive";
import {ShowForDirective} from "./directive/show-for.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationsManagerComponent, NotificationsManagerServiceComponent, AsyncPipe, VersionLogsComponent, FormsModule, ReactiveFormsModule, GalleryComponent, RouterLink, TaskManagerComponent, SearchTextComponent, ScrollToDirective, ShowForDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Learning';

  users = [{
    id: 1, name: "Amine"
  }, {
    id: 2, name: "James"
  }, {
    id: 3, name: "Jersey"
  }, {
    id: 4, name: "Sam"
  }]

  @ViewChild(GalleryComponent) gallery!: GalleryComponent;

  version: string = "0.0.0"
  versionForm = new FormGroup({
    version: new FormControl('0.0.0')
  })

  notificationCount$

  constructor(private notificationService: NotificationsService) {
    this.notificationCount$ = this.notificationService.count$;
  }

  notificationCount = 0;

  updateNotifications(count: number) {
    this.notificationCount = count;
  }

  updateVersion() {
    this.version = this.versionForm.controls.version.value!
    console.log(this.version)
  }

  inspect(gallery: GalleryComponent) {
    console.log(gallery)
  }

  removePicture() {
    console.log(this.gallery.cats.pop())
  }

  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }


}
