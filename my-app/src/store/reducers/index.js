import { combineReducers } from "redux";
import newsReducer from "./news.reducer";
import usersReducer from "./users.reducer";


const rootReducer = combineReducers({
   users: usersReducer,
   news: newsReducer,
});


export default rootReducer;