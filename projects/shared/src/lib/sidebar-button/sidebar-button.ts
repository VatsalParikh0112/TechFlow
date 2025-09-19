import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-sidebar-button',
  imports: [],
  templateUrl: './sidebar-button.html',
  styleUrl: './sidebar-button.scss',
})
export class SidebarButton {


  label = input<string>('Click Me');
}
