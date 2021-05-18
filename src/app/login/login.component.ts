import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  user: String;
  pwd: String;
  
  constructor(private AuthService: AuthService, private router: Router,) { }

 ngOnInit() {
    this.AuthService.setAuth(false);
  }

  autorizza() {
    if (this.user == "test" && this.pwd == "test")
    {
      this.AuthService.setAuth(true);
      this.router.navigate(['/addressBook']);
    }
    else
    {
    this.AuthService.setAuth(false);
    }
  }
  isAutorizzato(): boolean {
    return this.AuthService.getAuth();
  }  

}
