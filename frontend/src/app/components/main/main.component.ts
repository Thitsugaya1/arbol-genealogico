import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserInterface} from '../../models/user-interface';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }
  private user: UserInterface = {
    correo: '',
    nombres: '',
    ap_paterno: '',
    ap_materno: '',
    contrasena: ''
  };

  onRegister(): void {
      this.authService.registerUser(
      this.user.correo,
      this.user.nombres,
      this.user.ap_paterno,
      this.user.ap_materno,
      this.user.contrasena,
    ).subscribe(
      user => {
        console.log(user);
        window.scrollTo(0,0);
        this.toastr.success('Felicidades ¡Ya tienes una cuenta!\nahora puedes iniciar sesión'); //se muestra
        // notificación con mensaje de
        // confirmación
      },
      error => {
        var aux = error["error"];
        let errors = aux["errors"];
        if(isNullOrUndefined(errors)){
          errors = aux["msg"];
          this.toastr.error(errors);
        }else{
          for(let e of errors){
            this.toastr.error(e); //se muestra notificación con mensaje de error
          }
        }
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
        this.authService.setUser(data.usuario);
        this.authService.setToken(token);
        this.router.navigate(['dashboard']);
      },
      error => {
        let aux = error["error"];
        let errors = aux["errors"];
        if(isNullOrUndefined(errors)){
          errors = aux["msg"];
          this.toastr.error(errors);
        }else{
          for(let e of errors){
            this.toastr.error(e); //se muestra notificación con mensaje de error
          }
        }
        // console.log(errors);
      }
    );
  }

  ngOnInit() {
  }

}
