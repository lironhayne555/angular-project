import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filed-error',
  templateUrl: './filed-error.component.html',
  styleUrls: ['./filed-error.component.scss']
})
export class FiledErrorComponent {
  @Input() formField?: FormControl<any>;

  fieldErr(): string {
      const control = this.formField;
      if (
          !control ||
          !control.errors ||
          !control.dirty ||
          !control.touched
      ) {
          return '';
      }

      if (control.getError('required')) {
          return 'This field is required';
      }

      const maxlengthErr = control.getError('maxlength');
      if (maxlengthErr) {
          return `Name cannot be longer than ${maxlengthErr.requiredLength}`;
      }

      const minlengthErr = control.getError('minlength');
      if (minlengthErr) {
          return `Password cannot be shorter than ${minlengthErr.requiredLength}`;
      }

      if (control.getError('email')) {
          return 'Email is not valid';
      }

      return '';
  }
}
