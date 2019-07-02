import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})

/**<ng-container *ngIf = "largo>0; else loggedOut"><ul><ng-container *ngFor="let x of h"><li><button class="boto" title="Agregar hermano(a)/pareja" data-toggle="tooltip" (click)="openDialog()">+</button><a>{{x.nombres}}</a><button class="boto" title="Agregar hermano(a)/pareja" (click)="openDialog()">+</button><app-boton [h]=x.hijo largo={{x.hijo.length}}></app-boton></li></ng-container></ul></ng-container><ng-template #loggedOut><div><button class="boto" title="Agregar hijo(a)" (click)="openDialog()">+</button></div></ng-template> */
export class BotonComponent implements OnInit {
  @Input() h: any[];
  @Input() largo;

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

  }

}
