const indexList = (state = {
	data: [],
	loading: true
}, action) => {
	switch(action.type) {
		case "LOADING_LIST":
			return {data: state.data, loading: true};
			break;
		case "LOADING_LIST_SUCCESS":
			return {data: action.data.data, loading: false};
			break;
		case "LOADING_LIST_FAIL":
			return {data: state.data, loading: false};
			break;
		default:
			return state;
	}
};

export default indexList;
