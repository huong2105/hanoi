import { combineReducers } from "redux";
import { bannerReducer } from "./Banner/reducer"
import {dulieubanner} from "./bannermng/reducer"
import {ListReducer} from "./ListProduct/reducer"

const rootReducer = combineReducers({
    
    bannerReducer,
    dulieubanner,
    ListReducer
});

export default rootReducer;
