import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaCsharpPage } from './tela-csharp.page';

describe('TelaCsharpPage', () => {
  let component: TelaCsharpPage;
  let fixture: ComponentFixture<TelaCsharpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCsharpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaCsharpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
