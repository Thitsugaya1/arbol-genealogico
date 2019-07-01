import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerArbolComponent } from './ver-arbol.component';

describe('VerArbolComponent', () => {
  let component: VerArbolComponent;
  let fixture: ComponentFixture<VerArbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerArbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerArbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
