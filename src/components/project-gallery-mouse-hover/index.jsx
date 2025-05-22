"use client";
import { PROJECTS } from "@/constants";
import Project from "@/components/project";
import Modal from "@/components/modal";
import styles from "./style.module.css";
import { useState } from "react";

export const ProjectGalleryMouseHover = () => {
	const [modal, setModal] = useState({ active: false, index: 0 });

	return (
		<main className={styles.main}>
			<div className={styles.body}>
				{PROJECTS.map((project, index) => (
					<Project
						key={index}
						index={index}
						setModal={setModal}
						title={project.title}
						description={project.description}
					/>
				))}
			</div>
			<Modal modal={modal} projects={PROJECTS} />
		</main>
	);
};
