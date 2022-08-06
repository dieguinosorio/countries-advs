import { Injectable } from '@angular/core';
import { filter, map, Observable} from 'rxjs';
import { Countri } from 'src/app/domain/models/countri';
import { CountriGateway } from 'src/app/domain/models/gateway/countri-gateway';
import { environment } from 'src/environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { CountriMapperService } from '../../helpers/countrie/countrie-mapper';
import { IReadyEntity } from '../../helpers/countrie/iReadEntity';
const api_url = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CountriApiService extends CountriGateway{
  constructor(private http: HttpClient,private _countryMApperService:CountriMapperService) {super();}

  getById(name: string): Observable<Countri> {
    return this.http.get<Countri>(api_url+'/'+name)
  }
  getAll(): Observable<Countri[]> {
    return this.http.get<Array<Countri>>(api_url).pipe(
      map((val:any[])=> {
        return this._countryMApperService.fromMap(val);
      }),
    )
  }
}
