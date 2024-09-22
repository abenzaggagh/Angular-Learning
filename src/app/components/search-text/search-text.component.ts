import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HighlightDirective} from "../../directive/highlight.directive";
import {ReadTimeDirective} from "../../directive/read-time.directive";

@Component({
  selector: 'app-search-text',
  standalone: true,
  imports: [
    FormsModule,
    HighlightDirective,
    ReadTimeDirective
  ],
  templateUrl: './search-text.component.html',
  styleUrl: './search-text.component.css'
})
export class SearchTextComponent {

  searchText = '';

  readTime: string = ''

  onReadTimeCalculated(readTime: string) {
    this.readTime = readTime;
  }

}
