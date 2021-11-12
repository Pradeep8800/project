import { createStore } from "redux";

//REDUCER FUNCTIONS
const orderReducer = (state = { orders: [] }, action) => {
	if (action.type === "editOrder") {
		return { orders: action.orders };
	}
	if (action.type === "dispatchOrder") {
		let ord = state.orders.splice(action.id, 1);
		console.log(ord);
		// fetch("http://localhost:8080/placeorder/orders", {
		// 	method: "POST",
		// 	body: JSON.stringify(...ord),
		// 	headers: { "Content-Type": "application/json" },
		// })
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((err) => console.log(err));
		// return { orders: [...state.orders] };
	}
	return state;
};

//STORE DECLERATION
const store = createStore(orderReducer);

export default store;
