import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
    var ul = document.getElementById("ul-nav");
    var items = ul.getElementsByTagName("li");
    var aux;
    for (var i = 0; i < items.length; i++) {
      aux = items[i];
      aux.setAttribute("class", "invisible");
    }
    var li = document.createElement("li");
    var a = document.createElement("a");
    var content = document.createTextNode("Cerrar Sesión");
    li.className = "nav-item";
    a.className = "nav-link";
    a.href = "#home";
    a.appendChild(content);
    li.appendChild(a);
    ul.appendChild(li);
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
