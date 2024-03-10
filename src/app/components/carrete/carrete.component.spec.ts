import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarreteComponent } from './carrete.component';

describe('CarreteComponent', () => {
  let component: CarreteComponent;
  let fixture: ComponentFixture<CarreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
