import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  auth: boolean;

  constructor() {
   }

  setAuth(state: boolean) {
    this.auth = state;
    console.log("auth is been set to: " + this.auth)
  }


  getAuth() :boolean {
    console.log("the current auth value is : " + this.auth)
    return this.auth;
  }
}
