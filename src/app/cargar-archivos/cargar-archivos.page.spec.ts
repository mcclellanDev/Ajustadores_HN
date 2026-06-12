import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargarArchivosPage } from './cargar-archivos.page';

describe('CargarArchivosPage', () => {
  let component: CargarArchivosPage;
  let fixture: ComponentFixture<CargarArchivosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CargarArchivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
