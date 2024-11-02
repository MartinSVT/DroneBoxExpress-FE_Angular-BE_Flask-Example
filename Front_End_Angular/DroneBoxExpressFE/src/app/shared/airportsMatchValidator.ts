import { ValidatorFn } from '@angular/forms';

export function airportPassVal(origin_airport: string, destination_airport: string): ValidatorFn {
  return (control) => {
    const password1FC = control.get(origin_airport);
    const password2FC = control.get(destination_airport);
    const match = password1FC?.value != password2FC?.value;
    return match ? null : { airportPassVal: true };
  };
}