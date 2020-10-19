import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryincidentsPage } from './historyincidents.page';

describe('HistoryincidentsPage', () => {
  let component: HistoryincidentsPage;
  let fixture: ComponentFixture<HistoryincidentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryincidentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryincidentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
