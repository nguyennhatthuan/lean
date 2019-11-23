import { combineReducers } from "redux";
import {
  numberCollectionReducer,
  NumberCollectionState
} from "./numberCollection.reducer";

export interface State {
  numberCollection: NumberCollectionState;
}

export const rootReducers = combineReducers<State>({
  numberCollection: numberCollectionReducer
});
