import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JakzamowicComponent } from './jakzamowic.component';

describe('JakzamowicComponent', () => {
  let component: JakzamowicComponent;
  let fixture: ComponentFixture<JakzamowicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JakzamowicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JakzamowicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
