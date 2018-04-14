import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfirmieComponent } from './ofirmie.component';

describe('OfirmieComponent', () => {
  let component: OfirmieComponent;
  let fixture: ComponentFixture<OfirmieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfirmieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfirmieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
