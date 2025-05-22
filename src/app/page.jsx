"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import style from "./page.module.scss";

export default function Home() {
	const projects = [
		{
			id: 1,
			title: "Project Gallery Mouse Hover",
			link: "/animation/project-gallery-mouse-hover",
		},
		{
			id: 2,
			title: "Infinite Text Move on Scroll",
			link: "/scroll/infinite-text-move-on-scroll",
		},
		{ id: 3, title: "Smooth Scroll", link: "/scroll/smooth-scroll" },
		{ id: 4, title: "Navigation Menu", link: "/menu/navigation-menu" },
	];

	const [searchTerm, setSearchTerm] = useState("");
	const [sortOrder, setSortOrder] = useState("asc");

	const filteredAndSortedProjects = useMemo(() => {
		let filtered = projects.filter((project) =>
			project.title.toLowerCase().includes(searchTerm.toLowerCase())
		);

		return filtered.sort((a, b) => {
			if (sortOrder === "asc") {
				return a.title.localeCompare(b.title);
			} else {
				return b.title.localeCompare(a.title);
			}
		});
	}, [searchTerm, sortOrder]);

	const handleSort = () => {
		setSortOrder(sortOrder === "asc" ? "desc" : "asc");
	};

	const clearSearch = () => {
		setSearchTerm("");
	};

	return (
		<div className={style.main}>
			<div className={style.body}>
				<h1 className={style.title}>Project Collection</h1>
				<p className={style.description}>
					Browse through our collection of interactive web projects
				</p>

				<div className={style.container}>
					<div className={style.wrapper}>
						{/* Search and Controls */}
						<div className={style.table_controls}>
							<div className={style.search_container}>
								<div className={style.search_input_wrapper}>
									<svg
										className={style.search_icon}
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
									<input
										type="text"
										placeholder="Search projects..."
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className={style.search_input}
									/>
									{searchTerm && (
										<button
											onClick={clearSearch}
											className={style.clear_button}
											aria-label="Clear search"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									)}
								</div>
							</div>

							<div className={style.results_info}>
								{searchTerm && (
									<span className={style.results_count}>
										{filteredAndSortedProjects.length} of {projects.length}{" "}
										projects
									</span>
								)}
							</div>
						</div>

						{/* Table */}
						<table className={style.custom_table}>
							<thead>
								<tr>
									<th>
										<button
											onClick={handleSort}
											className={style.sort_header}
											aria-label={`Sort by project title ${
												sortOrder === "asc" ? "descending" : "ascending"
											}`}
										>
											Project Title
											<span className={style.sort_icon}>
												{sortOrder === "asc" ? (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M5 15l7-7 7 7"
														/>
													</svg>
												) : (
													<svg
														xmlns="http://www.w3.org/2000/24"
														width="16"
														height="16"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M19 9l-7 7-7-7"
														/>
													</svg>
												)}
											</span>
										</button>
									</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{filteredAndSortedProjects.length > 0 ? (
									filteredAndSortedProjects.map(({ id, link, title }) => (
										<Project key={id} title={title} link={link} />
									))
								) : (
									<tr>
										<td colSpan="2" className={style.no_results}>
											{searchTerm
												? `No projects found matching "${searchTerm}"`
												: "No projects available"}
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

const Project = ({ title, link }) => {
	return (
		<tr>
			<td>{title}</td>
			<td>
				<Link href={link} className={style.table_link}>
					See Demo
					<span className={style.arrow_icon}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="#3b82f6"
							viewBox="0 0 20 20"
						>
							<path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
						</svg>
					</span>
				</Link>
			</td>
		</tr>
	);
};
