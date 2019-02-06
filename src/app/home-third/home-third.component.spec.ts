import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThirdComponent } from './home-third.component';

describe('HomeThirdComponent', () => {
  let component: HomeThirdComponent;
  let fixture: ComponentFixture<HomeThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
