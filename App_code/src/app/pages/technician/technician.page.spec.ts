import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechnicianPage } from './technician.page';

describe('TechnicianPage', () => {
  let component: TechnicianPage;
  let fixture: ComponentFixture<TechnicianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
