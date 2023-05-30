import { createStore } from 'redux';
import { dataReducer } from './DataReducer';

const reducer = dataReducer;

export const ourStore = createStore(reducer);
window.store = ourStore;
