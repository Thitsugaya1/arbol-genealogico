import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

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
  testeo = 'Hola';
  wtf = '<app-boton></app-boton>';
  boton = '<div><button class="boton">+</button></div>';
  estado = false;
  estado2 = false;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    console.log("entró");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { myVar: "My var" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  registrarPersona(event){
    console.log(event.datos);
    this.lista = [{nombres: event.datos, ap_paterno: "a", sexo: 1,is_vivo: "true", foto: "", hijo: this.lista }];
  }

  abrirModal() {
    if (this.estado == false) {
      this.estado = true;
    } else {
      this.estado = false;
      //this.lista = [{nombres: "El palomito abuelo", ap_paterno: "a", sexo: 1,is_vivo: "true", foto: "", hijo: this.lista }];
    }
    console.log(this.estado);
  }

  abrirModal2() {
    if (this.estado2 == false) {
      this.estado2 = true;
    } else {
      this.estado2 = false;
      //this.lista = [{nombres: "El palomito abuelo", ap_paterno: "a", sexo: 1,is_vivo: "true", foto: "", hijo: this.lista }];
    }
    console.log(this.estado2);
  }

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

  

}
