import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	DELETE_USER,
	GET_USERS,
	POST_USER,
	PUT_USER
} from "../redux/action/action";

export const Crud = () => {
	const [title, setText] = useState("");

	const dispach = useDispatch();

	const data = useSelector((store) => store.crud.result.data);

	useEffect(() => {
		dispach(GET_USERS(data));
	}, [dispach, data]);

	return (
		<>
			<h4>Crud Principal </h4>
			<div>
				<input
					value={title}
					onChange={(e) => setText(e.target.value)}
					placeholder="name"
					type="text"
				/>
				<button onClick={() => dispach(POST_USER(data, title, setText))}>
					ADD
				</button>
			</div>

			<div>
				{data.map((user) => (
					// console.log(user),
					<div key={user.id}>
						<p>{user.title} </p>

						<button onClick={() => dispach(DELETE_USER(data, user.id))}>
							DELETE
						</button>

						<button
							onClick={() => dispach(PUT_USER(data, user.id, title, setText))}>
							UPDATE
						</button>
					</div>
				))}
			</div>
		</>
	);
};
