import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesContinentsItemsComponent } from './countries-continents-items.component';

describe('CountriesContinentsItemsComponent', () => {
  let component: CountriesContinentsItemsComponent;
  let fixture: ComponentFixture<CountriesContinentsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesContinentsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesContinentsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
