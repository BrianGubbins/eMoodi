/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { WeatherService } from '../../services/weather.service'


import { LocalForecastComponent } from './local-forecast.component';

class MockDummyService extends WeatherService {
  // mock everything used by the component
};

describe('LocalForecastComponent', () => {
  let component: LocalForecastComponent;
  let fixture: ComponentFixture<LocalForecastComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalForecastComponent ],
      providers: [{
        provide: WeatherService,
        useClass: MockDummyService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
