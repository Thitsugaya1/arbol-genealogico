import { Component, OnInit } from '@angular/core';
import {UserInterface} from 'src/app/models/user-interface';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  constructor(private authService: AuthService) { }

  private usuario: UserInterface = {
    correo: '',
    nombres: '',
    ap_paterno: '',
    ap_materno: '',
    contrasena: ''
  };

  ngOnInit() {
    this.usuario = this.authService.getCurrentUser();
    console.log(this.usuario);
    
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
    a.addEventListener("click", (e: Event) => this.authService.logoutUser());
    a.appendChild(content);
    li.appendChild(a);
    ul.appendChild(li);
  }

  onUpload(e){
    console.log('subir',e.target.file[0]);
    }

}
