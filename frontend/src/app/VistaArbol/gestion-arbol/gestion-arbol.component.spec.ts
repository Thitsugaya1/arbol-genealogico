import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionArbolComponent } from './gestion-arbol.component';

describe('GestionArbolComponent', () => {
  let component: GestionArbolComponent;
  let fixture: ComponentFixture<GestionArbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionArbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionArbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
