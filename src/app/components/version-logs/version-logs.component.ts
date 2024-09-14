import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-version-logs',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './version-logs.component.html',
  styleUrl: './version-logs.component.css'
})
export class VersionLogsComponent implements OnChanges {

  @Input()
  get version() {
    return this._version;
  }
  set version(version: string) {
    if (!version) {
      return;
    }
    if (!this._version) {
      this.logs.push(`initial version is ${version.trim()}`)
    } else {
      this.logs.push(`version changed to ${version.trim()}`);
    }
    this._version = version;
  }

  _version!: string;

  logs: string[] = []

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['version']
    if (changes['version'].isFirstChange()) {
      this.logs.push(`ngChanges : initial version is ${currentValue.trim()}`)
    } else {
      this.logs.push(`ngChanges : version changed to ${currentValue.trim()}`)
    }
  }

}
