"use client";

import { useState, useMemo, useCallback } from "react";
import style from "./page.module.scss";
import { PROJECTS_DATA } from "@/data";
import {
	CategoryFilter,
	NoResults,
	ProjectCard,
	ResultsInfo,
	SearchInput,
} from "@/components/project/app";

const ITEMS_PER_PAGE = 6;

const categories = [...new Set(PROJECTS_DATA.map((p) => p.category))];
export default function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

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
					) ||
					project.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
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
							<div className={style.stat}>
								<span className={style.stat_number}>3</span>
								<span className={style.stat_label}>Levels</span>
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
