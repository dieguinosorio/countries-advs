import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Countri } from 'src/app/domain/models/countri';

export const selectCountries = createFeatureSelector<ReadonlyArray<Countri>>('countries');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const groupCountries = createSelector(
  selectCountries,
  (countrie:any) => {
    let {countries} = countrie;
    return countries.reduce((acc,val)=>{
      acc[val.region] = acc[val.region] || [];
      acc[val.region].push(val)
      return acc
    },{})
  }
);

export const getContinents = createSelector(
  selectCountries,
  (countrie:any) => {
    let {countries} = countrie;
    let continents = countries.map(val => val.region)
    continents = new Set(continents);
    return [...continents].sort();
  }
);

export const getContinentsGroup = createSelector(
  selectCountries,
  (continents:any) => {
    return continents.groupByContients;
  }
)
