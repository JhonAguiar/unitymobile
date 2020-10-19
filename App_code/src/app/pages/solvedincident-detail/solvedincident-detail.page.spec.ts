import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolvedincidentDetailPage } from './solvedincident-detail.page';

describe('SolvedincidentDetailPage', () => {
  let component: SolvedincidentDetailPage;
  let fixture: ComponentFixture<SolvedincidentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolvedincidentDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolvedincidentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
