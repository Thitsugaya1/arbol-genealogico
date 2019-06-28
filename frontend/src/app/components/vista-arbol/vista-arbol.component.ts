import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-vista-arbol',
  templateUrl: './vista-arbol.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./vista-arbol.component.css']
})
export class VistaArbolComponent implements OnInit {

	lista = [{nombre:"perro",hijo:[{nombre:"delfin"}]},{nombre:"gato",hijo:[]}];
  constructor() { }
  testeo= '';
  boton = '<div><button class="boton">+</button></div>';
  
  ngOnInit() {
  console.log(this.lista);
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
  }

  padre(){
  	var abc = "<ul><div><button >+</button></div>";
  	
  	for (var i = 0 ; i<this.lista.length;i++ ){
  		
  		abc = abc + '<li>';
  		
  		
  		abc = abc + '<a>'+this.lista[i].nombre+'</a>';

  		if (this.lista[i].hijo.length > 0){
  			abc = abc + this.hijo(this.lista[i].hijo[0].nombre);
  		}
  		
  		abc = abc + '</li>';
  		
  	}
  	abc = abc + this.hermano('tapir');

  	this.testeo = abc+'</ul>';
  	console.log(this.testeo);
  	return this.testeo ;
  }

  hermano(nombre){
  	var abcd = '';
	    abcd = '<li>';
		abcd = abcd + '<a>'+nombre+'</a>';
		abcd = abcd + '</li>';
		return abcd;
  }
  hijo(nombre){
  	var abcd = '';
	    abcd = '<ul><li>';
		abcd = abcd + '<a>'+nombre+'</a>';
		
		abcd = abcd + '</li></ul>';
		return abcd;
  }


}
