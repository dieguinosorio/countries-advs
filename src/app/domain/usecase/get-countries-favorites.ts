import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Countri } from "../models/countri";
import { CountriGateway } from "../models/gateway/countri-gateway";

@Injectable({
  providedIn:'root'
})
export class GetCountriesFavoritesUsesCase{
  constructor(private _countriGateWay:CountriGateway){}

  getAllFavorites():Observable<Array<Countri>>{
    return this._countriGateWay.getAllFavorites();
  }
}
