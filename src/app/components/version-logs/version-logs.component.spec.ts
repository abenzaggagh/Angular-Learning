import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionLogsComponent } from './version-logs.component';

describe('VersionLogsComponent', () => {
  let component: VersionLogsComponent;
  let fixture: ComponentFixture<VersionLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersionLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
