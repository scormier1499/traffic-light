import React, { useState } from "react";

export function TrafficLight() {
	const [color, setColor] = useState("");
	return (
		<div>
			{/* <div className="title">ReactJS Traffic Light</div> */}
			<div className="cable"></div>
			<div className="container">
				<div
					className={
						color === "red"
							? "lightShape red selected"
							: "lightShape red"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color === "yellow"
							? "lightShape yellow selected"
							: "lightShape yellow"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color === "green"
							? "lightShape green selected"
							: "lightShape green"
					}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
}
