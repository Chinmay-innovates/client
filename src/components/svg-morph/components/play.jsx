import { shape1, shape1_morphed, shape2, shape2_morphed } from "./path";
import styles from "./styles.module.scss";
import SVGMorph from "./svg-morph";
const index = () => {
	return (
		<div className={styles.svgContainer}>
			<svg
				className={styles.svg}
				id="Layer_1"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 144 178"
			>
				<SVGMorph paths={[shape1, shape1_morphed, shape1]} />
				<SVGMorph paths={[shape2, shape2_morphed, shape2]} />
			</svg>
		</div>
	);
};

export default index;
