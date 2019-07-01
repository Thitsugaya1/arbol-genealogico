<<<<<<< HEAD
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {UserInterface} from 'src/app/models/user-interface';
import { isNullOrUndefined } from 'util';
import {AuthService} from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
=======
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
>>>>>>> Nuggets-Desarrollo

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  lista = [{
    nombres: "perro", ap_paterno: "a", sexo: 1, is_vivo: "true", foto: "", hijo: [
      { nombres: "el bastardo", ap_paterno: "a", sexo: 1, is_vivo: "true", foto: "", hijo: [{ nombres: "Anuel AA", ap_paterno: "", sexo: 1, is_vivo: "true", foto: "", hijo: [] }] }, { nombres: "Pornlando", ap_paterno: "a", sexo: 1, is_vivo: "true", foto: "", hijo: [] }]
  }];
  testeo = '';
  wtf = '<app-boton></app-boton>';
  boton = '<div><button class="boton">+</button></div>';


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
<<<<<<< HEAD
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
=======
    var ul = document.getElementById("ul-nav");
    var items = ul.getElementsByTagName("li");
    var aux;
    for (var i = 0; i < items.length; i++) {
      aux = items[i];
      aux.setAttribute("class", "invisible");
>>>>>>> Nuggets-Desarrollo
    }
  }

  /**
   * Funcion que busca desde el padre a los hijos de este.
   */
  padre() {
    var abc = "<ul>";
    for (var i = 0; i < this.lista.length; i++) {
      abc = abc + '<li><app-boton></app-boton>';
      abc = abc + '<a>' + this.lista[i].nombres + '</a>';
      if (this.lista[i].hijo.length > 0) {
        abc = abc + this.hijo(this.lista[i].hijo[0].nombres);
      }
      abc = abc + '</li>';
    }
    abc = abc + this.hermano('tapir');
    this.testeo = abc + '</ul>';
    console.log(this.testeo);
    return this.testeo;
  }

  /**
   * Funcion que crea el recuadro en pantalla de un hermano.
   * @param nombre 
   */
  hermano(nombre) {
    var abcd = '';
    abcd = '<li>';
    abcd = abcd + '<a>' + nombre + '</a>';
    abcd = abcd + '</li>';
    return abcd;
  }

  /**
   * Funcion que crea el recuadro en pantalla de un hijo.
   * @param nombre 
   */
  hijo(nombre) {
    var abcd = '';
    abcd = '<ul><li>';
    abcd = abcd + '<a>' + nombre + '</a>';
    abcd = abcd + '</li></ul>';
    return abcd;
  }

}
