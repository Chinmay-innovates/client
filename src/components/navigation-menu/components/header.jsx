"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./style.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { background, opacity } from "./animation";
import Nav from "./nav";

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const toggleMenu = () => {
		setIsActive(!isActive);
	};
	return (
		<motion.div
			className={styles.header}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
		>
			<div className={styles.bar}>
				<Link href="/">VISPER</Link>

				<motion.button
					onClick={toggleMenu}
					className={styles.el}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					aria-label={isActive ? "Close menu" : "Open menu"}
					aria-expanded={isActive}
				>
					<div
						className={`${styles.burger} ${
							isActive ? styles.burgerActive : ""
						}`}
					/>

					<div className={styles.label}>
						<motion.p
							variants={opacity}
							animate={!isActive ? "open" : "closed"}
						>
							Menu
						</motion.p>

						<motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
							Close
						</motion.p>
					</div>
				</motion.button>

				<motion.div
					variants={opacity}
					animate={!isActive ? "open" : "closed"}
					className={styles.shopContainer}
				>
					<p className={styles.shop}>Shop</p>

					<motion.div
						className={styles.el}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<motion.svg
							width="19"
							height="20"
							viewBox="0 0 19 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							whileHover={{ rotate: 5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<path
								d="M1.66602 1.66667H2.75449C2.9595 1.66667 3.06201 1.66667 3.1445 1.70437C3.2172 1.73759 3.2788 1.79102 3.32197 1.85829C3.37096 1.93462 3.38546 2.0361 3.41445 2.23905L3.80887 5M3.80887 5L4.68545 11.4428C4.79669 12.2604 4.85231 12.6692 5.04777 12.977C5.22 13.2481 5.46692 13.4637 5.75881 13.5978C6.09007 13.75 6.50264 13.75 7.32777 13.75H14.4593C15.2448 13.75 15.6375 13.75 15.9585 13.6087C16.2415 13.4841 16.4842 13.2832 16.6596 13.0285C16.8585 12.7397 16.9319 12.3539 17.0789 11.5823L18.1819 5.79141C18.2337 5.51984 18.2595 5.38405 18.222 5.27792C18.1892 5.18481 18.1243 5.1064 18.039 5.05668C17.9417 5 17.8035 5 17.527 5H3.80887ZM8.33268 17.5C8.33268 17.9602 7.95959 18.3333 7.49935 18.3333C7.03911 18.3333 6.66602 17.9602 6.66602 17.5C6.66602 17.0398 7.03911 16.6667 7.49935 16.6667C7.95959 16.6667 8.33268 17.0398 8.33268 17.5ZM14.9993 17.5C14.9993 17.9602 14.6263 18.3333 14.166 18.3333C13.7058 18.3333 13.3327 17.9602 13.3327 17.5C13.3327 17.0398 13.7058 16.6667 14.166 16.6667C14.6263 16.6667 14.9993 17.0398 14.9993 17.5Z"
								stroke="#4D3D30"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</motion.svg>

						<p>Cart(0)</p>
					</motion.div>
				</motion.div>
			</div>
			<motion.div
				variants={background}
				animate={isActive ? "open" : "closed"}
				className={styles.background}
			/>
			<AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
		</motion.div>
	);
};

export default Header;
