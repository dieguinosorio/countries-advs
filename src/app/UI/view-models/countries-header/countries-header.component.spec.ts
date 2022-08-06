import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesHeaderComponent } from './countries-header.component';

describe('CountriesHeaderComponent', () => {
  let component: CountriesHeaderComponent;
  let fixture: ComponentFixture<CountriesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
