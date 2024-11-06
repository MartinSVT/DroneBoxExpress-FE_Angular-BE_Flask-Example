import { Component } from '@angular/core';
import { Route } from 'src/app/shared/interfaces';
import { OperationsMainService } from '../operations-main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMainService } from 'src/app/user/user-main-service.service';

@Component({
  selector: 'app-route-delete',
  templateUrl: './route-delete.component.html',
  styleUrls: ['./route-delete.component.css']
})
export class RouteDeleteComponent {
  currentRoute = {} as Route;
  
  constructor( private opsService: OperationsMainService, private activeRoute: ActivatedRoute, private userServica: UserMainService, private router: Router) {}

  get CurrentUserData():any {
    return this.userServica.userData;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['routeId'];

      this.opsService.getRoute(id).subscribe((route) => {
      this.currentRoute = route;
    });
    });
  }

  deleteCurrentRoute(id: Number) {
    console.log(id)
    this.opsService.DeleteRoute(id).subscribe(() => {
        this.router.navigate([`/operations`]);
    });
  }
}
