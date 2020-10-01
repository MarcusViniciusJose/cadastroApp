import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaCssPage } from './tela-css.page';

describe('TelaCssPage', () => {
  let component: TelaCssPage;
  let fixture: ComponentFixture<TelaCssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCssPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaCssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
