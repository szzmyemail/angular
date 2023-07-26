import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './state/counter.actions';
//import { APPState } from './state';
import {counterFeatureKey, State, counterReducer} from './state/counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rejoiceMore';
  state$: Observable<State>;
  constructor(private store: Store<{counter: State}>) {
    this.state$ = store.select('counter');
  }
  ngOnInit() {
    const a = this.testPromiseOrObservable();
    console.log(1111, a instanceof Promise); //true
    console.log(1111, a instanceof Observable); //false
    a.then(res => {
      console.log(0, res);
      res.subscribe(
        res => {
          console.log('success', res);
        },
        err => {
          console.log('error', err);
        }
      );
    });
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  testPromiseOrObservable() {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve(1), 2000)
    });
    return promise.then(res => {
      //console.log(res === 1); //true
      return new Observable(observer => {
        //return observer.next(2);
        
        //observer.next(2);
        throw new Error('error la')
        observer.next('');
      })
    })
  }
}
