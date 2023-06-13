import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private imageService: ImageService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.imageService.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }

}
