"use client";

import Link from "next/link";
import { useState, useMemo, useCallback, memo } from "react";
import style from "./page.module.scss";

const PROJECTS_DATA = [
	{
		id: 1,
		title: "Project Gallery Mouse Hover",
		link: "/animation/project-gallery-mouse-hover",
		category: "animation",
		description: "Interactive gallery with smooth mouse hover effects",
		difficulty: "Advanced",
		tech: ["Framer Motion", "GSAP", "CSS Animations"],
	},
	{
		id: 2,
		title: "Infinite Text Move on Scroll",
		link: "/scroll/infinite-text-move-on-scroll",
		category: "scroll",
		description: "Continuous text animation triggered by scroll events",
		difficulty: "Intermediate",
		tech: ["JavaScript", "Intersection Observer"],
	},
	{
		id: 3,
		title: "Smooth Scroll",
		link: "/scroll/smooth-scroll",
		category: "scroll",
		description: "Buttery smooth scrolling experience across all browsers",
		difficulty: "Beginner",
		tech: ["CSS", "JavaScript"],
	},
	{
		id: 4,
		title: "Navigation Menu",
		link: "/menu/navigation-menu",
		category: "menu",
		description: "Modern responsive navigation with micro-interactions",
		difficulty: "Intermediate",
		tech: ["React", "Framer Motion"],
	},
	{
		id: 5,
		title: "Mouse Scale Image Gallery",
		link: "/cursor/mouse-scale-image-gallery",
		category: "cursor",
		description: "Dynamic image scaling based on cursor proximity",
		difficulty: "Advanced",
		tech: ["Request Animation Frame", "Padding bottom"],
	},
	{
		id: 6,
		title: "Curved Menu",
		link: "/menu/curved-menu",
		category: "menu",
		description: "Elegant curved menu with fluid animations",
		difficulty: "Intermediate",
		tech: ["SVG", "Framer Motion"],
	},
];

const ITEMS_PER_PAGE = 6;

const SearchIcon = memo(() => (
	<svg
		className={style.search_icon}
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

const ProjectCard = memo(({ project, index }) => {
	const getDifficultyClass = (difficulty) => {
		switch (difficulty) {
			case "Beginner":
				return style.difficulty_beginner;
			case "Intermediate":
				return style.difficulty_intermediate;
			case "Advanced":
				return style.difficulty_advanced;
			default:
				return style.difficulty_default;
		}
	};

	return (
		<div
			className={style.project_card}
			style={{ animationDelay: `${index * 100}ms` }}
		>
			<div className={style.card_header}>
				<div className={style.project_avatar}>{project.title.charAt(0)}</div>
				<div className={style.project_meta}>
					<span
						className={`${style.difficulty_badge} ${getDifficultyClass(
							project.difficulty
						)}`}
					>
						{project.difficulty}
					</span>
				</div>
			</div>

			<div className={style.card_content}>
				<h3 className={style.project_title}>{project.title}</h3>
				<p className={style.project_description}>{project.description}</p>

				<div className={style.tech_stack}>
					{project.tech.slice(0, 2).map((tech, i) => (
						<span key={i} className={style.tech_tag}>
							{tech}
						</span>
					))}
					{project.tech.length > 2 && (
						<span className={style.tech_tag}>+{project.tech.length - 2}</span>
					)}
				</div>
			</div>

			<div className={style.card_footer}>
				<div className={style.category_tag}>
					<div className={style.category_dot} />
					<span>{project.category}</span>
				</div>

				<Link
					href={project.link}
					className={style.demo_button}
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
		<div className={style.search_container}>
			<div className={style.search_input_wrapper}>
				<SearchIcon />
				<input
					type="text"
					placeholder="Search projects..."
					value={searchTerm}
					onChange={onSearchChange}
					className={style.search_input}
					autoComplete="off"
					spellCheck="false"
				/>
				{searchTerm && (
					<button
						onClick={onClearSearch}
						className={style.clear_button}
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
			<div className={style.category_filter}>
				<div className={style.filter_icon}>
					<FilterIcon />
				</div>
				<select
					value={selectedCategory}
					onChange={onCategoryChange}
					className={style.category_select}
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
		<div className={style.results_info}>
			<div className={style.results_indicator} />
			<span className={style.results_count}>
				{searchTerm
					? `Found ${filteredCount} of ${totalCount} projects`
					: `Showing ${filteredCount} projects`}
			</span>
		</div>
	);
});

ResultsInfo.displayName = "ResultsInfo";

const NoResults = memo(({ searchTerm }) => (
	<div className={style.no_results}>
		<div className={style.no_results_icon}>🔍</div>
		<h3>No projects found</h3>
		<p>
			{searchTerm
				? `No projects match "${searchTerm}". Try adjusting your search.`
				: "No projects available at the moment."}
		</p>
	</div>
));

NoResults.displayName = "NoResults";

export default function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const categories = useMemo(() => {
		return [...new Set(PROJECTS_DATA.map((p) => p.category))];
	}, []);

	const handleCategoryChange = useCallback((e) => {
		setSelectedCategory(e.target.value);
		setCurrentPage(1);
	}, []);

	const filteredProjects = useMemo(() => {
		let filtered = PROJECTS_DATA;

		if (searchTerm) {
			filtered = filtered.filter(
				(project) =>
					project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					project.description
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					project.tech.some((tech) =>
						tech.toLowerCase().includes(searchTerm.toLowerCase())
					)
			);
		}

		if (selectedCategory) {
			filtered = filtered.filter(
				(project) => project.category === selectedCategory
			);
		}

		return filtered.sort((a, b) => {
			return a.title.localeCompare(b.title);
		});
	}, [searchTerm, selectedCategory]);

	const handleSearchChange = useCallback((e) => {
		setSearchTerm(e.target.value);
		setCurrentPage(1);
	}, []);

	const handleClearSearch = useCallback(() => {
		setSearchTerm("");
		setCurrentPage(1);
	}, []);

	const paginatedProjects = useMemo(() => {
		const start = (currentPage - 1) * ITEMS_PER_PAGE;
		return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
	}, [filteredProjects, currentPage]);

	const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

	return (
		<div className={style.main}>
			<div className={style.background_elements}>
				<div className={style.gradient_orb_1} />
				<div className={style.gradient_orb_2} />
				<div className={style.gradient_orb_3} />
			</div>

			<div className={style.body}>
				<header className={style.header}>
					<div className={style.header_content}>
						<h1 className={style.title}>Interactive Project Collection</h1>
						<p className={style.description}>
							Explore our curated collection of modern web projects and
							interactive demos
						</p>
						<div className={style.stats}>
							<div className={style.stat}>
								<span className={style.stat_number}>
									{PROJECTS_DATA.length}
								</span>
								<span className={style.stat_label}>Projects</span>
							</div>
							<div className={style.stat}>
								<span className={style.stat_number}>{categories.length}</span>
								<span className={style.stat_label}>Categories</span>
							</div>
						</div>
					</div>
				</header>

				<main className={style.container}>
					<div className={style.wrapper}>
						<div className={style.controls}>
							<SearchInput
								searchTerm={searchTerm}
								onSearchChange={handleSearchChange}
								onClearSearch={handleClearSearch}
							/>
							<CategoryFilter
								selectedCategory={selectedCategory}
								onCategoryChange={handleCategoryChange}
								categories={categories}
							/>
							<ResultsInfo
								searchTerm={searchTerm}
								filteredCount={filteredProjects.length}
								totalCount={PROJECTS_DATA.length}
							/>
						</div>

						<div className={style.projects_grid}>
							{paginatedProjects.length > 0 ? (
								paginatedProjects.map((project, index) => (
									<ProjectCard
										key={project.id}
										project={project}
										index={index}
									/>
								))
							) : (
								<NoResults searchTerm={searchTerm} />
							)}
						</div>

						{totalPages > 1 && (
							<div className={style.pagination}>
								<button
									disabled={currentPage === 1}
									onClick={() => setCurrentPage((p) => p - 1)}
									className={style.pagination_button}
								>
									Previous
								</button>
								<div className={style.pagination_info}>
									<span className={style.current_page}>{currentPage}</span>
									<span className={style.page_separator}>of</span>
									<span className={style.total_pages}>{totalPages}</span>
								</div>
								<button
									disabled={currentPage >= totalPages}
									onClick={() => setCurrentPage((p) => p + 1)}
									className={style.pagination_button}
								>
									Next
								</button>
							</div>
						)}
					</div>
				</main>
			</div>
		</div>
	);
}
