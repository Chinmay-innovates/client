import { memo } from "react";
import styles from "@/app/page.module.scss";

const SearchIcon = memo(() => (
	<svg
		className={styles.search_icon}
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
		/>
	</svg>
));

const ClearIcon = memo(() => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
));

const FilterIcon = memo(() => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="18"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
		/>
	</svg>
));

const ArrowIcon = memo(() => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="18"
		fill="currentColor"
		viewBox="0 0 20 20"
		aria-hidden="true"
	>
		<path
			fillRule="evenodd"
			d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
			clipRule="evenodd"
		/>
	</svg>
));

export { SearchIcon, ClearIcon, FilterIcon, ArrowIcon };
