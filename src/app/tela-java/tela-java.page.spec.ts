import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaJavaPage } from './tela-java.page';

describe('TelaJavaPage', () => {
  let component: TelaJavaPage;
  let fixture: ComponentFixture<TelaJavaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaJavaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaJavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
