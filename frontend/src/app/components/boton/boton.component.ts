import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  template: '<ng-container *ngIf = "largo>0; else loggedOut"><ul><ng-container *ngFor="let x of h"><li><button class="boto">+</button><a>{{x.nombres}}</a><button class="boto">+</button><app-boton [h]=x.hijo largo={{x.hijo.length}}></app-boton></li></ng-container></ul></ng-container><ng-template #loggedOut><div><button class="boto">+</button></div></ng-template>',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() h: any[];
  @Input() largo;

  constructor() { }

  ngOnInit() {
  
  }

}
