import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncidentdetailsolvedPage } from './incidentdetailsolved.page';

describe('IncidentdetailsolvedPage', () => {
  let component: IncidentdetailsolvedPage;
  let fixture: ComponentFixture<IncidentdetailsolvedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentdetailsolvedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentdetailsolvedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
