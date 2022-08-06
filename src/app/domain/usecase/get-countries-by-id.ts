import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Countri } from "../models/countri";
import { CountriGateway } from "../models/gateway/countri-gateway";

@Injectable({
  providedIn:'root'
})
export class GetCountriesByIdUsesCase{
  constructor(private _countriGateWay:CountriGateway){}

  getById(name:string):Observable<Countri>{
    return this._countriGateWay.getById(name)
  }
}
