import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Countri } from "../models/countri";
import { CountriGateway } from "../models/gateway/countri-gateway";

@Injectable({
  providedIn:'root'
})
export class GetCountriesAllUsesCase {
  constructor(private _countriGateWay:CountriGateway){}

  getAll():Observable<Array<Countri>>{
    return this._countriGateWay.getAll();
  }
}
