import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducerFeatureKey, initialState, counterReducer } from './counter.reducer';


@NgModule({
  imports: [
    StoreModule.forFeature(counterReducerFeatureKey, counterReducer, {
        initialState,
    }),
  ],
})
export class AtlasAuthDataAccessModule {}