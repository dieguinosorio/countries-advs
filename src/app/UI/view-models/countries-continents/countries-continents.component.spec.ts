import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesContinentsComponent } from './countries-continents.component';

describe('CountriesContinentsComponent', () => {
  let component: CountriesContinentsComponent;
  let fixture: ComponentFixture<CountriesContinentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesContinentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
