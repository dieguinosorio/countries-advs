import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriServiceService {

  selectFavorite(name:string):Observable<any>{
    let favorites = JSON.parse(localStorage.getItem('favorites')) || Object.assign({});
    favorites = {...favorites,[name]:name}
    localStorage.setItem('favorites',JSON.stringify(favorites));
    return of(null)
  }

  unSelectFavorite(name:string):Observable<any>{
    console.log("Eliminar ",name)
    let favorites = JSON.parse(localStorage.getItem('favorites')) || Object.assign({});
    delete favorites[name]
    localStorage.setItem('favorites',JSON.stringify(favorites));
    return of(null)
  }

  isFavorite(name:string):boolean{
    let favorites = localStorage.getItem("favorites") || '{}';
    let favorite = JSON.parse(favorites);
    return favorite.hasOwnProperty(name)
  }
}
