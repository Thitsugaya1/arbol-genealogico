import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  template: '<ng-container *ngIf = "largo>0"><ng-container *ngFor="let x of h"><ul><li><a>{{x.nombre}}</a><div><button class="boto">+</button></div><app-boton [h]=x.hijo largo={{x.hijo.length}}></app-boton></li></ul> </ng-container></ng-container>',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() h: any[];

  @Input() largo;
  heroes = ['Magneto', 'Tornado'];
  constructor() { }

  ngOnInit() {
  
  }

}
