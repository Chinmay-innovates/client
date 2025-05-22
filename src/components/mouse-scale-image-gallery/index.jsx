import styles from "./page.module.scss";
import Double from "./components/double";
import { PROJECTS_3 as projects } from "@/constants";
const MouseScaleImageGallery = () => {
	return (
		<main className={styles.main}>
			<h1>
				We use design and technology to create brands and products that perform,
				delight, and scale.
			</h1>

			<div>
				<Double projects={[projects[0], projects[1]]} />
				<Double projects={[projects[2], projects[3]]} reversed />
				<Double projects={[projects[4], projects[5]]} />
				<Double projects={[projects[6], projects[7]]} reversed />
			</div>
		</main>
	);
};

export default MouseScaleImageGallery;
