import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechnicianDetailPage } from './technician-detail.page';

describe('TechnicianDetailPage', () => {
  let component: TechnicianDetailPage;
  let fixture: ComponentFixture<TechnicianDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicianDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
