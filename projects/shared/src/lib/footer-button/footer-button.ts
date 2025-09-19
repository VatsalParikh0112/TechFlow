import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-footer-button',
  imports: [],
  templateUrl: './footer-button.html',
  styleUrl: './footer-button.css',
})
export class FooterButton {


  label = input<string>('Click Me');
}
