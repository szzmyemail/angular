import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterReducerFeatureKey, State } from './counter.reducer';

export const getCounter = createFeatureSelector<State>(counterReducerFeatureKey);
export const getCount = createSelector(
    getCounter,
    (state: State) => state
)
