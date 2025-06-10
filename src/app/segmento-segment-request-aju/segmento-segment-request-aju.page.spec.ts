import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegmentoSegmentRequestAjuPage } from './segmento-segment-request-aju.page';

describe('SegmentoSegmentRequestAjuPage', () => {
  let component: SegmentoSegmentRequestAjuPage;
  let fixture: ComponentFixture<SegmentoSegmentRequestAjuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoSegmentRequestAjuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegmentoSegmentRequestAjuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
