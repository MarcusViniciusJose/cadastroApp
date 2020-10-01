import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaHtml5Page } from './tela-html5.page';

describe('TelaHtml5Page', () => {
  let component: TelaHtml5Page;
  let fixture: ComponentFixture<TelaHtml5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaHtml5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaHtml5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
