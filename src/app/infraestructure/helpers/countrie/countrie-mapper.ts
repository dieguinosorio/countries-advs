import { Injectable } from "@angular/core";
import { Countri } from "src/app/domain/models/countri";
import { CountriServiceService } from "src/app/shared/services/countri.service.service";
import { MapperService } from "../maps/maps";
import { IReadyEntity } from "./iReadEntity";

@Injectable({
  providedIn:'root'
})
export class CountriMapperService extends MapperService<IReadyEntity,Countri> {
  constructor(private countriService:CountriServiceService){
    super();
  }
  protected map(entity: IReadyEntity): Countri {
    return {
      name:entity.name,
      alpha2Code:entity.alpha2Code,
      alpha3Code:entity.alpha3Code,
      capital:entity.capital,
      subregion:entity.subregion,
      region:entity.region,
      population:entity.population,
      area:entity.area,
      timezones:entity.timezones,
      borders:entity.borders,
      nativeName:entity.nativeName,
      numericCode:entity.numericCode,
      flags:entity.flags,
      currencies:entity.currencies,
      languages:entity.languages,
      flag:entity.flag,
      favorite:this.countriService.isFavorite(entity.name)
    };
  }
}
