import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {UserInterface} from 'src/app/models/user-interface';
import { isNullOrUndefined } from 'util';
import {AuthService} from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

   usuario = {};

  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  private user: UserInterface = {
    correo: '',
    nombre: '',
    ap_paterno: '',
    ap_materno: '',
    contrasena: ''
  };

  ngOnInit() {
    this.usuario = localStorage.getItem('currentUser');
    if(isNullOrUndefined(this.usuario)){
      this.router.navigate(['']);
      this.toastr.error("Primero debes iniciar sesión!");
    }else{
      var ul = document.getElementById("ul-nav");
      var items = ul.getElementsByTagName("li");
      var aux;
      for(var i=0; i<items.length; i++){
        aux = items[i];
        aux.setAttribute("class", "invisible");
      }
      var li = document.createElement("li");
      var a = document.createElement("a");
      var content = document.createTextNode("Cerrar Sesión");
      li.className = "nav-item";
      a.className = "nav-link";
      a.addEventListener("click", (e: Event) => this.authService.logoutUser());
      a.href = "#home";
      a.appendChild(content);
      li.appendChild(a);
      ul.appendChild(li);
    }
  }

}
