"use client";
import React, { useState } from "react";
import { PROECTS } from "../constants";
import styles from "../page.module.css";
import Project from "../components/project";
import Modal from "../components/modal";

const page = () => {
	const [modal, setModal] = useState({ active: false, index: 0 });

	return (
		<main className={styles.main}>
			<div className={styles.body}>
				{PROECTS.map((project, index) => (
					<Project
						key={index}
						index={index}
						setModal={setModal}
						title={project.title}
						description={project.description}
					/>
				))}
			</div>
			<Modal modal={modal} projects={PROECTS} />
		</main>
	);
};

export default page;
