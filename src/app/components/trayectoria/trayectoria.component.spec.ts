import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrayectoriaComponent } from './trayectoria.component';

describe('ExperienciaComponent', () => {
  let component: TrayectoriaComponent;
  let fixture: ComponentFixture<TrayectoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrayectoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
