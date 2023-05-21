//רכיב שבונה סטור מרדוסר, רכיב שמחבר רדוסרים
import { createStore} from "redux";
//יבוא קומפוננטת רדוסר
import {dataReducer} from './dataReducer';

const reducer=dataReducer;

//בניית הסטור
export const ourStore=createStore(reducer)
  window.store=ourStore;

