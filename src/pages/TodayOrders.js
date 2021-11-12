import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./css/TodayOrders.module.css";

function TodayOrders() {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8080/displayorders/todayorders")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setOrders([...data]);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<nav className={`${classes.navbar}`}>
				<ul className={`${classes.navbar_container}`}>
					<li>
						<Link to="/">Add Order</Link>
					</li>
				</ul>
			</nav>
			<h3 className={classes.title}>Today's Orders</h3>
			<div>
				{orders.map((order) => (
					<li key={Math.random()}>
						{order.date} :{order.colour} {order.quantity}Ltr {order.total}
					</li>
				))}
			</div>
		</div>
	);
}

export default TodayOrders;
