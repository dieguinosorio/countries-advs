import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { groupCountries } from 'src/app/store/selectors/countri.selectors';

@Component({
  selector: 'countries-continents',
  templateUrl: './countries-continents.component.html',
  styleUrls: ['./countries-continents.component.scss']
})
export class CountriesContinentsComponent{

  continents$:Observable<any> = new Observable();
  continents:any[] = []
  constructor(private store:Store) {
    this.continents$ = this.store.select(groupCountries)
    this.continents$.subscribe(res=>{
      this.continents = Object.keys(res).sort((a,b)=> a.localeCompare(b))
    })
  }
}
