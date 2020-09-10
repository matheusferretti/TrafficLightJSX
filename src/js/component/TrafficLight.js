import React, { useState } from "react";

export function TrafficLight() {
	const state = "red";

	return (
		<div className="trafficLight">
			<div className="trafficTop" />
			<div className="trafficBox">
				<div className="red light" />
				<div className="yellow light" />
				<div className="green light" />
			</div>
		</div>
	);
}
