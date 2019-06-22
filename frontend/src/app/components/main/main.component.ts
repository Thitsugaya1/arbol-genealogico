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
    correo: '',
    nombre: '',
    ap_paterno: '',
    ap_materno: '',
    contrasena: ''
  };

  onRegister() : void {
    this.authService.registerUser(
      this.user.correo,
      this.user.nombre,
      this.user.ap_paterno,
      this.user.ap_materno,
      this.user.contrasena,
    ).subscribe(
      user => {
        console.log(user);
      }
    );
  }
  ngOnInit() {
  }

}
