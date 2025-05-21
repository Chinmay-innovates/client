"use client";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import style from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";

const InfiniteText = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let direction = -1;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		requestAnimationFrame(animate);
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => (direction = e.direction * -1),
			},
			x: "-300px",
		});
	}, []);

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent });
		gsap.set(secondText.current, { xPercent });
		requestAnimationFrame(animate);
		xPercent += 0.1 * direction;
	};
	return (
		<main className={style.main}>
			<Image fill src={"/images/officestudio.png"} alt="Background" />
			<div className={style.slider_container}>
				<div className={style.slider}>
					<p ref={firstText}>Freelance Developer -</p>
					<p ref={secondText}>Freelance Developer -</p>
				</div>
			</div>
		</main>
	);
};
export default InfiniteText;
