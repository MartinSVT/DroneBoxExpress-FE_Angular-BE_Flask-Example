import { ValidatorFn } from '@angular/forms';

export function matchPassVal(password1: string, password2: string): ValidatorFn {
  return (control) => {
    const password1FC = control.get(password1);
    const password2FC = control.get(password2);
    const match = password1FC?.value == password2FC?.value;
    return match ? null : { matchPassVal: true };
  };
}