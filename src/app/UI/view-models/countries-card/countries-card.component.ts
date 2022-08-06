import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Countri } from 'src/app/domain/models/countri';
import { GetCountriesAllUsesCase } from 'src/app/domain/usecase/get-countries-all';
import { groupCountries, selectCountries } from 'src/app/store/selectors/countri.selectors';
import { loadCountries } from '../../../store/actions/countri.actions'

@Component({
  selector: 'countries-card',
  templateUrl: './countries-card.component.html',
  styleUrls: ['./countries-card.component.scss']
})
export class CountriesCardComponent implements OnInit {

  countries:Countri[] = [];
  listCountries$:Observable<any> = new Observable();
  groupByCountries$!:Countri[];

  constructor(
    private store:Store
  ) {
    this.listCountries$ = this.store.select(selectCountries)
  }
  response$:any;

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
    this.store.select(groupCountries).subscribe(res=>{
      this.groupByCountries$ = res
    });
  }
}
