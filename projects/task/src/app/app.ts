import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { ToggleService } from './services/toggle-service';
import { Sidebar } from './layout/sidebar/sidebar';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Sidebar, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private toggleService = inject(ToggleService);

  isSidebarOpen = this.toggleService.isSidebarOpen;

  closeSidebar() {
    this.toggleService.closeSidebar();
  }
}