import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaArbolComponent } from './vista-arbol.component';

describe('VistaArbolComponent', () => {
  let component: VistaArbolComponent;
  let fixture: ComponentFixture<VistaArbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaArbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaArbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
