import { createReducer, on } from '@ngrx/store';
import { CountriState } from 'src/app/domain/models/countri.state';
import { filterCountries, loadCountries, retrievedCountriList, selectFavorite, showModal, unSelectFavorite } from '../actions/countri.actions';

export const initialState:CountriState = {
  loading:false,
  countries:[],
  countriesBackup:[],
  groupByContients:[]
};

export const countrieReducer = createReducer(
  initialState,

  on(loadCountries,(oldState,)=>{
    return {...oldState,loading:true}
  }),

  on(retrievedCountriList,(oldState,{ countries })=>{
    let continents = new Set(countries.map(val => val.region));
    let groupByContients = [...continents].sort();
    return {...oldState,...{countries,countriesBackup:countries,groupByContients},loading:false};
  }),

  on(filterCountries,(oldState,{ filterText,filterOptions })=>{
    let countries = oldState.countriesBackup;
    const filters = {
      filterText,
      filterOptions
    }
    let filText = filterText ?  filterText.toLowerCase() :'';
    countries = countries.filter(filt => filt.name.toLowerCase().includes(filText));
    if(filterOptions !=='all' && filterOptions !== 'favorites' && filterOptions){
      countries = countries.filter(filt => filt.region.toLowerCase().includes(filterOptions.toLowerCase()))
    }

    if(filterOptions === 'favorites'){
      countries = countries.filter(filt => filt.favorite === true)
    }

    if(filterOptions === 'all' && filterText ===''){
      countries = oldState.countriesBackup;
    }
    return {...oldState,countries,filters};
  }),

  on(showModal,(oldState,{show,countri})=>{
    const modalShow = show ,countriSelected = countri;
    return {...oldState,modalShow,countriSelected}
  }),

  on(selectFavorite,(oldState,{countri})=>{
    let arrCountries = [...oldState.countries].map(val=>{
      if(val.name == countri.name) return countri;
      return val;
    });
    const countriesBackup = oldState.countriesBackup.map(val=>{
      if(val.name == countri.name) return countri;
      return val;
    })
    let countriSelected = {...oldState.countriSelected};
    countriSelected.favorite = true;
    return {...oldState,countries:arrCountries,countriesBackup,countriSelected};
  }),

  on(unSelectFavorite,(oldState,{countri})=>{
    let arrCountries = [...oldState.countries].map(val=>{
      if(val.name == countri.name) return countri;
      return val;
    });
    let countriesBackup = oldState.countriesBackup.map(val=>{
      if(val.name == countri.name) return countri;
      return val;
    })
    let countriSelected = {...oldState.countriSelected};
    countriSelected.favorite = false;
    return {...oldState,countries:arrCountries,countriesBackup, countriSelected};
  })

);
