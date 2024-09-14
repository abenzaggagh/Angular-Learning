import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  cats = ['https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/',
    'https://www.pexels.com/photo/white-and-grey-kitten-on-brown-and-black-leopard-print-textile-45201/',
    'https://www.pexels.com/photo/close-up-photo-of-cute-sleeping-cat-416160/']

}
