import { ActionReducerMap } from "@ngrx/store";
import { CountriState } from "../domain/models/countri.state";
import { countrieReducer } from "./reducers/countri.reducers";

export interface AppState {
  countries: CountriState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  countries:countrieReducer
}
