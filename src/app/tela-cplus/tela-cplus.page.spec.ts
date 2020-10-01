import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaCplusPage } from './tela-cplus.page';

describe('TelaCplusPage', () => {
  let component: TelaCplusPage;
  let fixture: ComponentFixture<TelaCplusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCplusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaCplusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
