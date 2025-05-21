import Link from "next/link";
import style from "./page.module.css";

export default function Home() {
	const projects = [
		{ id: 1, title: "Mouse Hover Project Gallery", link: "/mouse-hover" },
		{ id: 2, title: "Infinite Text Move on Scroll", link: "/infinite-text" },
		{ id: 3, title: "Smooth Scroll", link: "/smooth-scroll" },
	];
	return (
		<div className={style.main}>
			<div className={style.body}>
				<h1 className={style.title}>Project Collection</h1>
				<p className={style.description}>
					Browse through our collection of interactive web projects
				</p>

				<div className={style.container}>
					<div className={style.wrapper}>
						<table className={style.custom_table}>
							<thead>
								<tr>
									<th>Project Title</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{projects.map(({ id, link, title }) => (
									<Project key={id} title={title} link={link} />
								))}
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
					See Project
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
