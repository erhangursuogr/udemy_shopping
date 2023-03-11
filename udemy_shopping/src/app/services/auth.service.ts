import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;

  constructor(
    private toastrService: ToastrService
  ) { }

  isAuthenticated() {
    return this.isAuth;
  }

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
            this.toastrService.success('You are now connected', 'Login');
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
    this.toastrService.warning('You are now disconnected', 'Logout');
  }

}
