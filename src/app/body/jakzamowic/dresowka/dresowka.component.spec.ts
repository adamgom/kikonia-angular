import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DresowkaComponent } from './dresowka.component';

describe('MaterialComponent', () => {
  let component: DresowkaComponent;
  let fixture: ComponentFixture<DresowkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DresowkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DresowkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
