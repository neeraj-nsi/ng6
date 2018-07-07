import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrestlerComponent } from './wrestler.component';

describe('WrestlerComponent', () => {
  let component: WrestlerComponent;
  let fixture: ComponentFixture<WrestlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrestlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrestlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
