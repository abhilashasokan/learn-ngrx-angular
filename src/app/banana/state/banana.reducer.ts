import { GET_NEW_BANANA } from './banana.action';
import * as ProgramActions from './banana.action';

export function reducer(state: any, action: ProgramActions.BananaAction): any {
  switch (action.type) {
    case GET_NEW_BANANA: {
      console.log('Reducer ' + GET_NEW_BANANA);
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: 'yellow'
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}