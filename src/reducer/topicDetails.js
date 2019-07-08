const topicDetails = (state = {
	data: {},
	loading: true
}, action) => {
	switch(action.type) {
		case "LOADING_TOPICDETAILS":
			return {data: state.data, loading: true};
			break;
		case "LOADING_TOPICDETAILS_SUCCESS":
			return {data: action.data, loading: false};
			break;
		case "LOADING_TOPICDETAILS_FAIL":
			return {data: state.data, loading: false};
			break;
		default:
			return state;
	}
};

export default topicDetails;