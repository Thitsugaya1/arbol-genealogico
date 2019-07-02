import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarArbolComponent } from './modificar-arbol.component';

describe('ModificarArbolComponent', () => {
  let component: ModificarArbolComponent;
  let fixture: ComponentFixture<ModificarArbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarArbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarArbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
