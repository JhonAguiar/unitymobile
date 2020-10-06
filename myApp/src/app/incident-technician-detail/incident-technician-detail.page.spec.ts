import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncidentTechnicianDetailPage } from './incident-technician-detail.page';

describe('IncidentTechnicianDetailPage', () => {
  let component: IncidentTechnicianDetailPage;
  let fixture: ComponentFixture<IncidentTechnicianDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentTechnicianDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentTechnicianDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
