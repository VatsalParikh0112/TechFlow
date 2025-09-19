import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-company-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './company-layout.html',
  styleUrl: './company-layout.scss'
})
export class CompanyLayout {}
