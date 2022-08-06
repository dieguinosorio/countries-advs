import { Observable } from "rxjs";
import { Countri } from "../countri";

export abstract class CountriGateway{
  abstract getById(name:string):Observable<Countri>;
  abstract getAll():Observable<Array<Countri>>;
}
