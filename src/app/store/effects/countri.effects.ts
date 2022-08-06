import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GetCountriesAllUsesCase } from 'src/app/domain/usecase/get-countries-all';
import { CountriServiceService } from 'src/app/shared/services/countri.service.service';
import { loadCountries, selectFavorite, selectFavoriteSucess, unSelectFavorite, unSelectFavoriteSucess } from '../actions/countri.actions';

@Injectable()
export class CountriEffects {

  loadCountries$ = createEffect(() => this.actions$.pipe(
    ofType(loadCountries),
    mergeMap(() => this.getCountriesAllUsesCase.getAll()
      .pipe(
        map(countries => ({ type: '[Countries List/API] Retrieve Countri Success', countries })),
        catchError(() => EMPTY)
      ))
    )
  );

  selectFavorite$ = createEffect(() => this.actions$.pipe(
    ofType(selectFavorite),
    mergeMap((action) => this.countriService.selectFavorite(action.countri.name)
      .pipe(
        map(() => selectFavoriteSucess({success:true})),
        catchError(() => EMPTY)
      ))
    )
  );

  unSelectFavorite$ = createEffect(() => this.actions$.pipe(
    ofType(unSelectFavorite),
    mergeMap((action) => this.countriService.unSelectFavorite(action.countri.name)
      .pipe(
        map(() => unSelectFavoriteSucess({success:true})),
        catchError(() => EMPTY)
      ))
    )
  );



  constructor(
    private actions$: Actions,
    private getCountriesAllUsesCase:GetCountriesAllUsesCase,
    private countriService:CountriServiceService
  ) {}
}
