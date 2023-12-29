import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from './state/counter.actions';
import { State} from './state/counter.reducer';
import { getCount} from './state/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rejoiceMore';
  state$: Observable<State>;
  count20231216: Observable<any>;;
  constructor(private store: Store<{aaa: State}>) {
    this.state$ = store.select('aaa');

    this.count20231216 = this.store.pipe(select(getCount));
  }
  ngOnInit() {
    this.count20231216.subscribe(
      res => {
        console.log(777, res);
      }
    );

    this.test();
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

  test() {
    return Promise.resolve(2).then(
      res => console.log(res)
    )
  }
}
