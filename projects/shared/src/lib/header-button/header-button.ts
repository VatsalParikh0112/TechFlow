import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-header-button',
  imports: [],
  templateUrl: './header-button.html',
  styleUrl: './header-button.scss'
})
export class HeaderButton {
  label = input<string>('Click Me');
  bgColor = input<string>('bg-blue-600 hover:bg-blue-700');
  textColor = input<string>('text-white');
}
