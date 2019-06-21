import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserInterface} from '../../models/user-interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService) { }
  private user: UserInterface = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    password: ''
  };

  onRegister() : void {
    this.authService.registerUser(
      this.user.nombre,
      this.user.apellidoPaterno,
      this.user.apellidoMaterno,
      this.user.correo,
      this.user.password
    ).subscribe(
      user => {
        console.log(user);
      }
    );
  }
  ngOnInit() {
  }

}
