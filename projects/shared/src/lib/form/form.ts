import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.html'
})
export class Form {
  private fb = inject(FormBuilder);
  private dialogRef = inject<DialogRef<Form>>(DialogRef);
  data = inject(DIALOG_DATA, { optional: true });

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    age: ['', [Validators.required, Validators.min(18)]],
    address: ['']
  });

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
      console.log(this.form.value);
    }
  }

  close() { 
    this.dialogRef.close();
  }
}
