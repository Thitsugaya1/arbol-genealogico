import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

   usuario = {};

  constructor() { }

  ngOnInit() {
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
    a.href = "#home";
    a.appendChild(content);
    li.appendChild(a);
    ul.appendChild(li);
    this.usuario = localStorage.getItem('Usuario');
  }

}
