import { combineReducers } from "redux";
import {
  numberCollectionReducer,
  NumberCollectionState
} from "./numberCollection.reducer";

export interface INumberCollectionState {
  numberCollection: NumberCollectionState;
}

export const rootReducers = combineReducers<INumberCollectionState>({
  numberCollection: numberCollectionReducer
});
