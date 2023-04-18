import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromCounter from './counter.reducer';


export interface State {
  [fromCounter.counterFeatureKey]: fromCounter.State
}

export const reducers: ActionReducerMap<State> = {
  [fromCounter.counterFeatureKey]: fromCounter.reducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
