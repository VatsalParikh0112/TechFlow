import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './product-layout.html',
  styleUrl: './product-layout.scss'
})
export class ProductLayout {}
