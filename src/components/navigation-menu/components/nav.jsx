"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import styles from "./style.module.css";
import { height } from "./animation";
import Image from "./image";
import Body from "./body";
import Footer from "./footer";

import { LINKS } from "@/constants";
const Nav = () => {
	const [selectedLink, setSelectedLink] = useState({
		isActive: false,
		index: 0,
	});
	return (
		<motion.div
			variants={height}
			className={styles.nav}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<Body
						links={LINKS}
						selectedLink={selectedLink}
						setSelectedLink={setSelectedLink}
					/>
					<Footer />
				</div>
				<Image
					src={LINKS[selectedLink.index].src}
					selectedLink={selectedLink}
				/>
			</div>
		</motion.div>
	);
};

export default Nav;
