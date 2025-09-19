import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './header-layout.html',
  styleUrl: './header-layout.scss'
})
export class HeaderLayout {}
