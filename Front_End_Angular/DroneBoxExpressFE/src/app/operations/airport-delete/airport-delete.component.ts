import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/shared/interfaces';
import { OperationsMainService } from '../operations-main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMainService } from 'src/app/user/user-main-service.service';

@Component({
  selector: 'app-airport-delete',
  templateUrl: './airport-delete.component.html',
  styleUrls: ['./airport-delete.component.css']
})
export class AirportDeleteComponent implements OnInit {
  currentAirport = {} as Airport;

  constructor( private opsService: OperationsMainService, private activeRoute: ActivatedRoute, private userServica: UserMainService, private router: Router) {}

  get CurrentUserData():any {
    return this.userServica.userData;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['airportId'];

      this.opsService.getAirport(id).subscribe((airport) => {
      this.currentAirport = airport;
    });
    });
  }

  deleteCurrentAirport(id: Number) {
    this.opsService.DeleteAirport(id).subscribe(() => {
        this.router.navigate([`/operations`]);
    });
  }

}
