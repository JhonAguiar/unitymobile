import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryincidentsDetailPage } from './historyincidents-detail.page';

describe('HistoryincidentsDetailPage', () => {
  let component: HistoryincidentsDetailPage;
  let fixture: ComponentFixture<HistoryincidentsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryincidentsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryincidentsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
