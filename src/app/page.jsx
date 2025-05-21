import Link from "next/link";
import style from "./page.module.css";
import { title } from "process";
export default function Home() {
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<table className={style.custom_table}>
					<thead>
						<tr>
							<th>Title</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
						<TData title="Mouse Hover Project Gallery" link="/mouse-hover" />
					</tbody>
				</table>
			</div>
		</div>
	);
}

const TData = ({ title, link }) => {
	return (
		<tr>
			<td>{title}</td>
			<td>
				<Link href={link}>See Project</Link>
			</td>
		</tr>
	);
};
