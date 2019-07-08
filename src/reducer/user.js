const user = (state = {
	data: {},
	loading: true
}, action) => {
	switch(action.type) {
		case "LOADING_USER":
			return {data: state.data, loading: true};
			break;
		case "LOADING_USER_SUCCESS":
			return {data: action.data.data, loading: false};
			break;
		case "LOADING_USER_FAIL":
			return {data: state.data, loading: false};
			break;
		default:
			return state;
	}
};

export default user;
