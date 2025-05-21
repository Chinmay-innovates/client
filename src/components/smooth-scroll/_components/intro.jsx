import { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Intro = () => {
	const background = useRef(null);
	const introImage = useRef(null);
	const titleRef = useRef(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: true,
				start: "top",
				end: "+=500px",
			},
		});

		tl.from(background.current, { clipPath: `inset(15%)` })
			.to(introImage.current, { height: "200px" }, 0)
			.to(titleRef.current, { opacity: 0.5, y: 50 }, 0);
	}, []);

	return (
		<section className={styles.homeHeader} data-scroll-section>
			<div className={styles.backgroundImage} ref={background}>
				<Image
					src={"/images/background.jpeg"}
					fill
					alt="background image"
					priority
				/>
			</div>
			<div className={styles.intro}>
				<div
					ref={introImage}
					data-scroll
					data-scroll-speed="0.3"
					className={styles.introImage}
				>
					<Image src={"/images/intro.png"} alt="intro image" fill priority />
				</div>
				<h1 ref={titleRef} data-scroll data-scroll-speed="0.7">
					SMOOTH SCROLL
				</h1>
			</div>
		</section>
	);
};
