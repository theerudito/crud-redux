import { DELETE_, GET_, POST_, PUT_ } from "../types/types";

export const GET_USERS = (item) => (dispach) => {
	dispach({
		type: GET_,
		payload: item
	});
};

export const POST_USER = (data, title, setTitle) => async (dispach) => {
	dispach({
		type: POST_,
		payload: [...data, { id: data.length + 1, title }]
	});
	setTitle("");
};

export const DELETE_USER = (data, id) => async (dispach) => {
	dispach({
		type: DELETE_,
		payload: data.filter((item) => item.id !== id)
	});
};

export const PUT_USER = (data, id, title, setText) => async (dispach) => {
	console.log(title);
	dispach({
		type: PUT_,
		payload: data.filter((item) => (item.id === id ? title : item))
	});
	setText("");
};
