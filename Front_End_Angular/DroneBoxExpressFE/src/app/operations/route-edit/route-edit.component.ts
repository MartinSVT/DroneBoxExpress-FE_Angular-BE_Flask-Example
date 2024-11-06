import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Airport, Route } from 'src/app/shared/interfaces';
import { OperationsMainService } from '../operations-main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMainService } from 'src/app/user/user-main-service.service';
import { airportPassVal } from 'src/app/shared/airportsMatchValidator';

@Component({
  selector: 'app-route-edit',
  templateUrl: './route-edit.component.html',
  styleUrls: ['./route-edit.component.css']
})
export class RouteEditComponent implements OnInit {
  airports: Airport[] = [];
  currentRoute = {} as Route;

  constructor(
    private myFormBuilder: FormBuilder, 
    private opsService: OperationsMainService, 
    private activeRoute: ActivatedRoute, 
    private userServica: UserMainService, 
    private router: Router) {}

  get CurrentUserData():any {
    return this.userServica.userData;
  }

  updateRouteForm = this.myFormBuilder.group({
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
    return this.updateRouteForm.get('airportsGroup');
  }

  updateRoute() {
    if (this.updateRouteForm.invalid) {
      return;
    }
    let costPerkg = this.updateRouteForm.value.cost_per_kg as String;
    let destinationAirport = this.updateRouteForm.value.airportsGroup?.destination_airport as String;
    let originAirport = this.updateRouteForm.value.airportsGroup?.origin_airport as String;

    this.opsService.UpdateRoute(this.currentRoute.id, costPerkg, destinationAirport, originAirport).subscribe(() => {
        this.router.navigate([`/operations`]);
      });
  }

  ngOnInit(): void {
    this.opsService.listAirports().subscribe(airports => {
      this.airports = airports
    })

    this.activeRoute.params.subscribe((data) => {
      const id = data['routetId'];
      this.opsService.getRoute(id).subscribe((route) => {
      this.currentRoute = route;
      this.updateRouteForm.get("cost_per_kg")?.setValue(String(this.currentRoute.cost_per_kg))
      this.airportsGroup?.get("origin_airport")?.setValue(String(this.currentRoute.origin_airport))
      this.airportsGroup?.get("destination_airport")?.setValue(String(this.currentRoute.destination_airport))
      })
    });
  }
  
}
