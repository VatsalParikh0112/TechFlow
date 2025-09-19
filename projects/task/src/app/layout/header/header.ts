import { Component, inject, input } from '@angular/core';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { HeaderButton } from '../../../../../shared/src/lib/header-button/header-button';
import { ToggleService } from '../../services/toggle-service';
import { Router } from '@angular/router';
import { Form } from '../../../../../shared/src/lib/form/form'

@Component({
  selector: 'app-header',
  imports: [HeaderButton, DialogModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router = inject(Router);
  private dialog = inject(Dialog);
  private toggleService = inject(ToggleService);
  path = input<string>('');

   openForm() {
    const dialogRef = this.dialog.open(Form, {
      data: { title: 'Please Fill the Form' }
    });
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }

  onMenuToggle() {
    this.toggleService.toggleSidebar();
  }
}
