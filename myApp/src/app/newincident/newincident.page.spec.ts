import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewincidentPage } from './newincident.page';

describe('NewincidentPage', () => {
  let component: NewincidentPage;
  let fixture: ComponentFixture<NewincidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewincidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewincidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
