import { FormControl } from '@angular/forms';

export interface FormModel {
  source: FormControl<string | null>;
  type: FormControl<string | null>;
  userId: FormControl<string | null>;
  username: FormControl<string | null>;
}
