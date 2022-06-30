const inicialState = {
	data: [
		{ id: 0, title: "title1" },
		{ id: 1, title: "title2" }
	]
};

export const resultReducer = (state = inicialState, action) => {
	console.log(action);
	switch (action.type) {
		case "GET_":
			return {
				...state,
				data: action.payload
			};
		case "POST_":
			return {
				...state,
				data: action.payload
			};

		case "PUT_":
			return {
				...state,
				data: action.payload
			};

		case "DELETE_":
			return {
				...state,
				data: action.payload
			};

		default:
			return state;
	}
};
