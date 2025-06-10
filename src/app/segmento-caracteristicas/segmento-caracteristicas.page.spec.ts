import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegmentoCaracteristicasPage } from './segmento-caracteristicas.page';

describe('SegmentoCaracteristicasPage', () => {
  let component: SegmentoCaracteristicasPage;
  let fixture: ComponentFixture<SegmentoCaracteristicasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoCaracteristicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegmentoCaracteristicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
