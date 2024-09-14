import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsManagerServiceComponent } from './notifications-manager-service.component';

describe('NotificationsManagerServiceComponent', () => {
  let component: NotificationsManagerServiceComponent;
  let fixture: ComponentFixture<NotificationsManagerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsManagerServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsManagerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
