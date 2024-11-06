import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OperationsMainService } from '../operations-main.service';
import { Router } from '@angular/router';
import { Airport } from 'src/app/shared/interfaces';
import { airportPassVal } from 'src/app/shared/airportsMatchValidator';

@Component({
  selector: 'app-route-add',
  templateUrl: './route-add.component.html',
  styleUrls: ['./route-add.component.css']
})
export class RouteAddComponent implements OnInit {
  airports: Airport[] = [];
  
  constructor(private myFormBuilder: FormBuilder, private opsService: OperationsMainService, private router: Router) {}
  newRouteForm = this.myFormBuilder.group({
    cost_per_kg: ['', [Validators.required, Validators.min(0.01) ]],
    airportsGroup: this.myFormBuilder.group(
      {
        destination_airport: ['', [Validators.required, Validators.min(0.01)]],
        origin_airport: ['', [Validators.required, Validators.min(0.01)]]
      },
      {
        validators: [airportPassVal('origin_airport', 'destination_airport')],
      }
    ),
  });

  get airportsGroup() {
    return this.newRouteForm.get('airportsGroup');
  }

  createRoute(): void {
    if (this.newRouteForm.invalid) {
      return;
    }

    let costPerkg = this.newRouteForm.value.cost_per_kg as String;
    let destinationAirport = this.newRouteForm.value.airportsGroup?.destination_airport as String;
    let originAirport = this.newRouteForm.value.airportsGroup?.origin_airport as String;

    this.opsService.CreateRoute(costPerkg, destinationAirport, originAirport).subscribe(() => {
      this.router.navigate([`/operations`]);
    });
  }

  ngOnInit(): void {
    this.opsService.listAirports().subscribe(airports => {
      this.airports = airports
    })
  }

}
