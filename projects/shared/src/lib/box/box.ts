import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-box',
  imports: [],
  templateUrl: './box.html',
  styleUrl: './box.css',
})
export class Box {
  bgColor = input<string>('bg-blue-200');
  textColor = input<string>('text-blue-500');
  label = input<string>('Lightning Fast');
  borderColor = input<string>('border-blue-600');
  icon = input<string>('L')
}
