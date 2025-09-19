import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input<string>('Click Me');
  bgColor = input<string>('bg-blue-600 hover:bg-blue-700');
  textColor = input<string>('text-white');
  border = input<string>('border-white');
}
