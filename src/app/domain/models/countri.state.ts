import { Countri } from "./countri";
import { FiltersCountri } from "./countri.filters";
export interface CountriState{
  loading:boolean,
  countries:ReadonlyArray<Countri>,
  countriesBackup:ReadonlyArray<Countri>,
  groupByContients:string[],
  modalShow?:boolean,
  countriSelected?:Countri
  filters?:FiltersCountri
}
