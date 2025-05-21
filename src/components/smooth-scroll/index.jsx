"use client";
import { useEffect, useRef, useState } from "react";

import { Intro } from "./_components/intro";
import { Description } from "./_components/description";
import { Projects } from "./_components/projects";
const SmoothScroll = () => {
	useEffect(() => {
		(async () => {
			const { default: LocomotiveScroll } = await import("locomotive-scroll");
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<main>
			<Intro />
			<Description />
			<Projects />
		</main>
	);
};

export default SmoothScroll;
