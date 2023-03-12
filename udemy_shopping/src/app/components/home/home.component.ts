import { Component } from '@angular/core';
import { BasketModel } from 'src/app/models/basketModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isAuth: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((response:any) => {
      this.isAuth = response;
      }, (error:any) => {
        console.log(error);
      });
  }

  ngAfterContentChecked() {
    this.authService.isAuthenticated().subscribe((response:any) => {
      this.isAuth = response;
      }, (error:any) => {
        console.log(error);
      });
  }

}
