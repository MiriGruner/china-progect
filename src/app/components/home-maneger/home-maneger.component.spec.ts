import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManegerComponent } from './home-maneger.component';

describe('HomeManegerComponent', () => {
  let component: HomeManegerComponent;
  let fixture: ComponentFixture<HomeManegerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeManegerComponent]
    });
    fixture = TestBed.createComponent(HomeManegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
