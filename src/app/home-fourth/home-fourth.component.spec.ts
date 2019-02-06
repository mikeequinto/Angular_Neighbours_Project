import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFourthComponent } from './home-fourth.component';

describe('HomeFourthComponent', () => {
  let component: HomeFourthComponent;
  let fixture: ComponentFixture<HomeFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
