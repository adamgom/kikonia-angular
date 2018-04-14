import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkaninyComponent } from './tkaniny.component';

describe('MaterialComponent', () => {
  let component: TkaninyComponent;
  let fixture: ComponentFixture<TkaninyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkaninyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkaninyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
