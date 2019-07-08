import {combineReducers} from "redux";
import indexList from "./indexList.js";
import topicDetails from './topicDetails.js';
import user from './user.js';
const reducer = combineReducers({
	indexList: indexList,
	topicDetails: topicDetails,
	user: user
});

export default reducer;
