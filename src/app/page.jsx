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
	},
	{
		id: 2,
		title: "Infinite Text Move on Scroll",
		link: "/scroll/infinite-text-move-on-scroll",
		category: "scroll",
	},
	{
		id: 3,
		title: "Smooth Scroll",
		link: "/scroll/smooth-scroll",
		category: "scroll",
	},
	{
		id: 4,
		title: "Navigation Menu",
		link: "/menu/navigation-menu",
		category: "menu",
	},
	{
		id: 5,
		title: "Mouse Scale Image Gallery",
		link: "/cursor/mouse-scale-image-gallery",
		category: "cursor",
	},
];

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

const SortUpIcon = memo(() => (
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
			d="M5 15l7-7 7 7"
		/>
	</svg>
));

const SortDownIcon = memo(() => (
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
			d="M19 9l-7 7-7-7"
		/>
	</svg>
));

const ArrowIcon = memo(() => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		fill="#3b82f6"
		viewBox="0 0 20 20"
		aria-hidden="true"
	>
		<path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
	</svg>
));

const Project = memo(({ title, link }) => {
	return (
		<tr>
			<td>{title}</td>
			<td>
				<Link href={link} className={style.table_link} prefetch={false}>
					See Demo
					<span className={style.arrow_icon}>
						<ArrowIcon />
					</span>
				</Link>
			</td>
		</tr>
	);
});

Project.displayName = "Project";

// Search input component
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

// Sort button component
const SortButton = memo(({ sortOrder, onSort }) => {
	return (
		<button
			onClick={onSort}
			className={style.sort_header}
			aria-label={`Sort by project title ${
				sortOrder === "asc" ? "descending" : "ascending"
			}`}
			type="button"
		>
			Project Title
			<span className={style.sort_icon}>
				{sortOrder === "asc" ? <SortUpIcon /> : <SortDownIcon />}
			</span>
		</button>
	);
});

SortButton.displayName = "SortButton";

// Results info component
const ResultsInfo = memo(({ searchTerm, filteredCount, totalCount }) => {
	if (!searchTerm) return null;

	return (
		<div className={style.results_info}>
			<span className={style.results_count}>
				{filteredCount} of {totalCount} projects
			</span>
		</div>
	);
});

ResultsInfo.displayName = "ResultsInfo";

// No results component
const NoResults = memo(({ searchTerm }) => (
	<tr>
		<td colSpan="2" className={style.no_results}>
			{searchTerm
				? `No projects found matching "${searchTerm}"`
				: "No projects available"}
		</td>
	</tr>
));

NoResults.displayName = "NoResults";

export default function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortOrder, setSortOrder] = useState("asc");

	const filteredAndSortedProjects = useMemo(() => {
		if (!searchTerm && sortOrder === "asc") {
			return PROJECTS_DATA;
		}

		let filtered = searchTerm
			? PROJECTS_DATA.filter((project) =>
					project.title.toLowerCase().includes(searchTerm.toLowerCase())
			  )
			: PROJECTS_DATA;

		if (sortOrder === "desc") {
			return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
		}

		return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
	}, [searchTerm, sortOrder]);

	const handleSort = useCallback(() => {
		setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
	}, []);

	const handleSearchChange = useCallback((e) => {
		setSearchTerm(e.target.value);
	}, []);

	const handleClearSearch = useCallback(() => {
		setSearchTerm("");
	}, []);

	return (
		<div className={style.main}>
			<div className={style.body}>
				<header>
					<h1 className={style.title}>Interactive Project Collection</h1>
					<p className={style.description}>
						Browse through our collection of web projects
					</p>
				</header>

				<main className={style.container}>
					<div className={style.wrapper}>
						{/* Search and Controls */}
						<div className={style.table_controls}>
							<SearchInput
								searchTerm={searchTerm}
								onSearchChange={handleSearchChange}
								onClearSearch={handleClearSearch}
							/>
							<ResultsInfo
								searchTerm={searchTerm}
								filteredCount={filteredAndSortedProjects.length}
								totalCount={PROJECTS_DATA.length}
							/>
						</div>

						{/* Table */}
						<table className={style.custom_table} role="table">
							<thead>
								<tr>
									<th scope="col">
										<SortButton sortOrder={sortOrder} onSort={handleSort} />
									</th>
									<th scope="col">Actions</th>
								</tr>
							</thead>
							<tbody>
								{filteredAndSortedProjects.length > 0 ? (
									filteredAndSortedProjects.map((project) => (
										<Project
											key={project.id}
											title={project.title}
											link={project.link}
										/>
									))
								) : (
									<NoResults searchTerm={searchTerm} />
								)}
							</tbody>
						</table>
					</div>
				</main>
			</div>
		</div>
	);
}
