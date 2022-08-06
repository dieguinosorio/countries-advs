import { createAction, props } from '@ngrx/store';
import { Countri } from 'src/app/domain/models/countri';

export const loadCountries = createAction(
  '[Countries load] Load Countries',
);

export const filterCountries = createAction(
  '[Countries Filter] Filter Countries',
  props<{filterText:string,filterOptions:string}>()
);

export const retrievedCountriList = createAction(
  '[Countries List/API] Retrieve Countri Success',
  props<{ countries: ReadonlyArray<Countri> }>()
);

export const showModal = createAction(
  '[Countrie load Modal] Load Modal',
  props<{show:boolean,countri:Countri}>()
);

export const selectFavorite = createAction(
  '[Countrie Selec Favorite] Select Countri Favorite',
  props<{countri:Countri}>()
);

export const selectFavoriteSucess = createAction(
  '[Countrie Selec Favorite Success] Select Countri Favorite Success',
  props<{success:boolean}>()
);

export const unSelectFavorite = createAction(
  '[Countrie UnSelec Favorite] UnSelect Countri Favorite',
  props<{countri:Countri}>()
);

export const unSelectFavoriteSucess = createAction(
  '[Countrie UnSelec Favorite Success] UnSelect Countri Favorite Success',
  props<{success:boolean}>()
);


