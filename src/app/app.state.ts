import { ActionReducerMap } from '@ngrx/store';
import * as bananaStore from './banana.state';

export interface AppState {
  banana: bananaStore.State;
}

