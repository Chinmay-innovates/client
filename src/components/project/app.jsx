import { memo } from "react";
import styles from "@/app/page.module.scss";
import {
	ClearIcon,
	SearchIcon,
	ArrowIcon,
	FilterIcon,
} from "@/components/icons";
import Link from "next/link";

const ProjectCard = memo(({ project, index }) => {
	const getDifficultyClass = (difficulty) => {
		switch (difficulty) {
			case "Beginner":
				return styles.difficulty_beginner;
			case "Intermediate":
				return styles.difficulty_intermediate;
			case "Advanced":
				return styles.difficulty_advanced;
			default:
				return styles.difficulty_default;
		}
	};

	return (
		<div
			className={styles.project_card}
			styles={{ animationDelay: `${index * 100}ms` }}
		>
			<div className={styles.card_header}>
				<div className={styles.project_avatar}>{project.title.charAt(0)}</div>
				<div className={styles.project_meta}>
					<span
						className={`${styles.difficulty_badge} ${getDifficultyClass(
							project.difficulty
						)}`}
					>
						{project.difficulty}
					</span>
				</div>
			</div>

			<div className={styles.card_content}>
				<h3 className={styles.project_title}>{project.title}</h3>
				<p className={styles.project_description}>{project.description}</p>

				<div className={styles.tech_stack}>
					{project.tech.slice(0, 2).map((tech, i) => (
						<span key={i} className={styles.tech_tag}>
							{tech}
						</span>
					))}
					{project.tech.length > 2 && (
						<span className={styles.tech_tag}>+{project.tech.length - 2}</span>
					)}
				</div>
			</div>

			<div className={styles.card_footer}>
				<div className={styles.category_tag}>
					<div className={styles.category_dot} />
					<span>{project.category}</span>
				</div>

				<Link
					href={project.link}
					className={styles.demo_button}
					prefetch={false}
				>
					<span>View Demo</span>
					<ArrowIcon />
				</Link>
			</div>
		</div>
	);
});

ProjectCard.displayName = "ProjectCard";

const SearchInput = memo(({ searchTerm, onSearchChange, onClearSearch }) => {
	return (
		<div className={styles.search_container}>
			<div className={styles.search_input_wrapper}>
				<SearchIcon />
				<input
					type="text"
					placeholder="Search projects..."
					value={searchTerm}
					onChange={onSearchChange}
					className={styles.search_input}
					autoComplete="off"
					spellCheck="false"
				/>
				{searchTerm && (
					<button
						onClick={onClearSearch}
						className={styles.clear_button}
						aria-label="Clear search"
						type="button"
					>
						<ClearIcon />
					</button>
				)}
			</div>
		</div>
	);
});

SearchInput.displayName = "SearchInput";

const CategoryFilter = memo(
	({ selectedCategory, onCategoryChange, categories }) => {
		return (
			<div className={styles.category_filter}>
				<div className={styles.filter_icon}>
					<FilterIcon />
				</div>
				<select
					value={selectedCategory}
					onChange={onCategoryChange}
					className={styles.category_select}
				>
					<option value="">All Categories</option>
					{categories.map((category) => (
						<option key={category} value={category}>
							{category.charAt(0).toUpperCase() + category.slice(1)}
						</option>
					))}
				</select>
			</div>
		);
	}
);

CategoryFilter.displayName = "CategoryFilter";

const ResultsInfo = memo(({ searchTerm, filteredCount, totalCount }) => {
	if (!searchTerm && filteredCount === totalCount) return null;

	return (
		<div className={styles.results_info}>
			<div className={styles.results_indicator} />
			<span className={styles.results_count}>
				{searchTerm
					? `Found ${filteredCount} of ${totalCount} projects`
					: `Showing ${filteredCount} projects`}
			</span>
		</div>
	);
});

ResultsInfo.displayName = "ResultsInfo";

const NoResults = memo(({ searchTerm }) => (
	<div className={styles.no_results}>
		<div className={styles.no_results_icon}>🔍</div>
		<h3>No projects found</h3>
		<p>
			{searchTerm
				? `No projects match "${searchTerm}". Try adjusting your search.`
				: "No projects available at the moment."}
		</p>
	</div>
));

NoResults.displayName = "NoResults";

export { ProjectCard, SearchInput, CategoryFilter, ResultsInfo, NoResults };
