import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyhelpdeskPage } from './myhelpdesk.page';

describe('MyhelpdeskPage', () => {
  let component: MyhelpdeskPage;
  let fixture: ComponentFixture<MyhelpdeskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhelpdeskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyhelpdeskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
