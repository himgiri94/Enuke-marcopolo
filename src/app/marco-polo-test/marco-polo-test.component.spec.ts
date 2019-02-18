import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoPoloTestComponent } from './marco-polo-test.component';

describe('MarcoPoloTestComponent', () => {
  let component: MarcoPoloTestComponent;
  let fixture: ComponentFixture<MarcoPoloTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoPoloTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoPoloTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
