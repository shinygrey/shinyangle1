import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourofheroesComponent } from './tourofheroes.component';

describe('TourofheroesComponent', () => {
  let component: TourofheroesComponent;
  let fixture: ComponentFixture<TourofheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourofheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourofheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
