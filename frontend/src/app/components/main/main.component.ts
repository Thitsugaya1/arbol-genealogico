import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserInterface} from '../../models/user-interface';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }
  private user: UserInterface = {
    correo: '',
    nombre: '',
    ap_paterno: '',
    ap_materno: '',
    contrasena: ''
  };

  onRegister(): void {
      this.authService.registerUser(
      this.user.correo,
      this.user.nombre,
      this.user.ap_paterno,
      this.user.ap_materno,
      this.user.contrasena,
    ).subscribe(
      user => {
        console.log(user);
        this.toastr.success('Usuario guardado con éxito'); //se muestra notificación con mensaje de confirmación
      },
      error => {
        console.log(error);
        this.toastr.error('No se pudo registrar el usuario'); //se muestra notificación con mensaje de error
      }
    );
  }
  onLogin() {
      return this.authService.loginUser(
      this.user.correo,
      this.user.contrasena,
    ).subscribe(
      data => {
        console.log(data);
        const token = data.id;
        this.authService.setToken(token);
        this.router.navigate(['dashboard']);
      },
      error => {
        this.toastr.error('No se encontraron los datos ingresados'); //se muestra notificación de error
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
