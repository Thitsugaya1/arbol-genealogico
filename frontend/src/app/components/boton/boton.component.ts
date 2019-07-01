import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-boton',
  template: '<ng-container *ngIf = "largo>0; else loggedOut"><ul><ng-container *ngFor="let x of h"><li><button class="boto" title="Agregar hermano(a)/pareja" data-toggle="tooltip" (click)="openDialog()">+</button><a>{{x.nombres}}</a><button class="boto" title="Agregar hermano(a)/pareja" (click)="openDialog()">+</button><app-boton [h]=x.hijo largo={{x.hijo.length}}></app-boton></li></ng-container></ul></ng-container><ng-template #loggedOut><div><button class="boto" title="Agregar hijo(a)" (click)="openDialog()">+</button></div></ng-template>',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() h: any[];
  @Input() largo;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    console.log("entró");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {myVar: "My var"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
  ngOnInit() {
  
  }

}
