import { Component, inject, input } from '@angular/core';
import { FooterIcon } from '../../../../../shared/src/lib/footer-icon/footer-icon';
import { FooterButton } from '../../../../../shared/src/lib/footer-button/footer-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [FooterIcon, FooterButton],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private router = inject(Router);
  path = input<string>('');

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
