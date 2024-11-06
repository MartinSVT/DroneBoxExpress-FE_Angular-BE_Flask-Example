import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Airport } from 'src/app/shared/interfaces';
import { OperationsMainService } from '../operations-main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMainService } from 'src/app/user/user-main-service.service';

@Component({
  selector: 'app-airport-edit',
  templateUrl: './airport-edit.component.html',
  styleUrls: ['./airport-edit.component.css']
})
export class AirportEditComponent {
  currentAirport = {} as Airport;

  constructor(
    private myFormBuilder: FormBuilder, 
    private opsService: OperationsMainService, 
    private activeRoute: ActivatedRoute, 
    private userServica: UserMainService, 
    private router: Router) {}

  get CurrentUserData():any {
    return this.userServica.userData;
  }

  updateAirportForm = this.myFormBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2) ]],
    lon: ['', [Validators.required, Validators.pattern("-?[0-9]*\\.?[0-9]+")]],
    lat: ['', [Validators.required, Validators.pattern("-?[0-9]*\\.?[0-9]+")]]
  });


  updateAirport() {
    if (this.updateAirportForm.invalid) {
      return;
    }
    let name = this.updateAirportForm.value.name as String
    let aLon = this.updateAirportForm.value.lon as String
    let aLat = this.updateAirportForm.value.lat as String

    this.opsService.UpdateAirport(this.currentAirport.id, name, aLon, aLat).subscribe(() => {
        this.router.navigate([`/operations`]);
      });
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['airportId'];

    this.opsService.getAirport(id).subscribe((airport) => {
      this.currentAirport = airport;
      this.updateAirportForm.get("name")?.setValue(String(this.currentAirport.airport_name))
      this.updateAirportForm.get("lon")?.setValue(String(this.currentAirport.longitude))
      this.updateAirportForm.get("lat")?.setValue(String(this.currentAirport.latitude))
      })
    });
  }


}
