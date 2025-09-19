import { Component, inject, input } from '@angular/core';
import { SidebarButton } from '../../../../../shared/src/lib/sidebar-button/sidebar-button';
import { ToggleService } from '../../services/toggle-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarButton],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private router = inject(Router);
  private toggleService = inject(ToggleService);
  path = input<string>('');

  navigate(path: string) {
    this.router.navigate([path]);
    this.toggleService.closeSidebar();
  }
}
