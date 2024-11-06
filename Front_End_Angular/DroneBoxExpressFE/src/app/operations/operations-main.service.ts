import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AirportsURL, RoutesURL } from '../Environment';
import { Airport, Route } from '../shared/interfaces';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsMainService {

  constructor(private myHttp: HttpClient) {}

  listRoutes() {
    return this.myHttp
      .get<any>(RoutesURL, {});
  }

  listAirports() {
    return this.myHttp
      .get<any>(AirportsURL, {});
  }

  getAirport(id: Number) {
    return this.myHttp.get<Airport>(`${AirportsURL}/${id}`);
  }

  getRoute(id: Number) {
    return this.myHttp.get<Route>(`${RoutesURL}/${id}`);
  }

  CreateAirport(airport_name: String, lon: String, lat: String) {
    return this.myHttp.post<Airport>(
      `${AirportsURL}/`, {
        "airport_name": airport_name,
        "latitude": lat,
        "longitude": lon,
    }
    )
  }

  CreateRoute(costPerKg: String, destinationAirport: String, originAirport: String) {
    return this.myHttp.post<Route>(
      `${RoutesURL}/`, {
        "cost_per_kg": costPerKg,
        "destination_airport": destinationAirport,
        "origin_airport": originAirport,
    }
    )
  }

  UpdateAirport(id: Number, airportName: String, airportLon: String, airportLat: String) {
    return this.myHttp.put<Airport>(
      `${AirportsURL}/${id}/`, {
        "airport_name": airportName,
        "id": id,
        "latitude": airportLat,
        "longitude": airportLon
    })}

  UpdateRoute(id: Number, costPerKg: String, destinationAirport: String, originAirport: String) {
    return this.myHttp.put<Route>(
      `${RoutesURL}/${id}/`, {
        "id": id,
        "cost_per_kg": costPerKg,
        "destination_airport": destinationAirport,
        "origin_airport": originAirport,
    })}
  
    DeleteAirport(id: Number) {
      return this.myHttp.delete(
        `${AirportsURL}/${id}/`, {}
      )
    }

    DeleteRoute(id: Number) {
      return this.myHttp.delete(
        `${RoutesURL}/${id}/`, {}
      )
    }

}
