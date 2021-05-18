import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  auth: boolean;

  constructor() { }

  setAuth(state: boolean) {
    this.auth == state;
  }


  getAuth() :boolean {
    return this.auth;
  }
}
