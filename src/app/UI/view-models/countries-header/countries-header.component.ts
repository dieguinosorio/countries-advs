import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { filterCountries } from 'src/app/store/actions/countri.actions';
import {  getContinentsGroup  } from 'src/app/store/selectors/countri.selectors';

@Component({
  selector: 'countries-header',
  templateUrl: './countries-header.component.html',
  styleUrls: ['./countries-header.component.scss']
})
export class CountriesHeaderComponent implements OnInit,OnDestroy {
  continents:string[] = [];
  destroy$:Subject<boolean> = new Subject<boolean>();
  constructor(private readonly store:Store,private fb:FormBuilder) { }

  form:FormGroup = this.fb.group({
    filterText:[''],
    filterOptions:['all']
  })

  ngOnInit(): void {
    this.store.select(getContinentsGroup).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      this.continents = res
    });

    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(selectedValue  => {
      this.store.dispatch(filterCountries(selectedValue));
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
