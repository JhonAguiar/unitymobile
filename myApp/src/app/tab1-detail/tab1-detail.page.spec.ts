import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab1DetailPage } from './tab1-detail.page';

describe('Tab1DetailPage', () => {
  let component: Tab1DetailPage;
  let fixture: ComponentFixture<Tab1DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1DetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
