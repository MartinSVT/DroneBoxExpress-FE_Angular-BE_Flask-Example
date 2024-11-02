import { Component, OnChanges, OnInit } from '@angular/core';
import { UserMainService } from '../user/user-main-service.service';

@Component({
  selector: 'app-auth-state',
  templateUrl: './auth-state.component.html',
  styleUrls: ['./auth-state.component.css']
})
export class AuthStateComponent implements OnInit, OnChanges {
  public guest: boolean = true;
  public user: any;

  constructor(private userService: UserMainService) {}

  ngOnInit(): void {
    try {
      const StorageUser = localStorage.getItem("user") || '';
      this.user = JSON.parse(StorageUser);
      this.guest = false
    } catch (error) {
      this.user = undefined;
      this.guest = true
    }
    this.userService.user = this.user
    this.userService.guest = this.guest
  }

  ngOnChanges(): void {
    try {
      const StorageUser = localStorage.getItem("user") || '';
      this.user = JSON.parse(StorageUser);
      this.guest = false
    } catch (error) {
      this.user = undefined;
      this.guest = true
    }
    this.userService.user = this.user
    this.userService.guest = this.guest
  }
}
