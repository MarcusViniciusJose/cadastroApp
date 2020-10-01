import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaPhpPage } from './tela-php.page';

describe('TelaPhpPage', () => {
  let component: TelaPhpPage;
  let fixture: ComponentFixture<TelaPhpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPhpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaPhpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
