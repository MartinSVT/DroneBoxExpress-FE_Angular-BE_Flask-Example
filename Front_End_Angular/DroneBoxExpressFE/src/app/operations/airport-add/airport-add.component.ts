import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OperationsMainService } from '../operations-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airport-add',
  templateUrl: './airport-add.component.html',
  styleUrls: ['./airport-add.component.css']
})
export class AirportAddComponent {

  constructor(private myFormBuilder: FormBuilder, private opsService: OperationsMainService, private router: Router) {}
  newAirportForm = this.myFormBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2) ]],
    lon: ['', [Validators.required, Validators.pattern("-?[0-9]*\\.?[0-9]+")]],
    lat: ['', [Validators.required, Validators.pattern("-?[0-9]*\\.?[0-9]+")]]
  });
  
  createAirport(): void {
    if (this.newAirportForm.invalid) {
      return;
    }

    let airportName = this.newAirportForm.value.name as String;
    let airportLon = this.newAirportForm.value.lon as String;
    let airportLat = this.newAirportForm.value.lat as String;

    this.opsService.CreateAirport(airportName, airportLon, airportLat).subscribe(() => {
      this.router.navigate([`/operations`]);
    });

    console.log(this.newAirportForm.value);
  }
}
