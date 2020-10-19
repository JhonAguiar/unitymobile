import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolvedincidentPage } from './solvedincident.page';

describe('SolvedincidentPage', () => {
  let component: SolvedincidentPage;
  let fixture: ComponentFixture<SolvedincidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolvedincidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolvedincidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
