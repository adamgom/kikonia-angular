import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListyComponent } from './menulisty.component';

describe('MenulistyComponent', () => {
  let component: MenuListyComponent;
  let fixture: ComponentFixture<MenuListyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
