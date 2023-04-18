import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
  count: number
}

export const initialState: State = {
  count: 0,
};

export const reducer = createReducer(
  initialState,
  on(CounterActions.increment, state => {
    return {...state, count: state.count + 1}
  }),
  on(CounterActions.decrement, state => {
    return {...state, count: state.count - 1}
  }),
  on(CounterActions.reset, state => {
    return {count: 0}
  })
);

