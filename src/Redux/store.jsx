import { createStore } from 'redux';
import { dataReducer } from './dataReducer';

const reducer = dataReducer;

export const ourStore = createStore(reducer);
window.store = ourStore;