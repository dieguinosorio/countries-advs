import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Countri } from 'src/app/domain/models/countri';
import { showModal } from 'src/app/store/actions/countri.actions';
import { groupCountries } from 'src/app/store/selectors/countri.selectors';

@Component({
  selector: 'countries-continents-items',
  templateUrl: './countries-continents-items.component.html',
  styleUrls: ['./countries-continents-items.component.scss']
})
export class CountriesContinentsItemsComponent implements OnInit {
  @Input() continent:string;

  constructor(private readonly store:Store) { }
  countries:Countri[] = [];

  ngOnInit(): void {
    this.store.select(groupCountries).subscribe(res=>{
      this.countries = res[this.continent]
    })
  }

  onSelectedCountri(countri:Countri):void{
    this.store.dispatch(showModal({show:true,countri}))
  }

}
