import React, { useState } from "react";

export function TrafficLight() {
	const [color, setColor] = useState("");
	return (
		<div>
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

			{/* icons start */}
			<div className="iconContainer">
				<i
					className={
						color === "red"
							? "fas fa-hand-paper"
							: color === "green"
							? "fas fa-walking"
							: color === "yellow"
							? "fas fa-exclamation-triangle"
							: " "
					}
				/>
			</div>
			{/* icons end */}
		</div>
	);
}
