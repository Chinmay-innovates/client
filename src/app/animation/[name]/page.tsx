import { ProjectGalleryMouseHover } from "@/components/project-gallery-mouse-hover";

interface Props {
	params: Promise<{
		name: string;
	}>;
}
const page = async ({ params }: Props) => {
	const { name } = await params;
	if (name === "project-gallery-mouse-hover") {
		return <ProjectGalleryMouseHover />;
	}

	return (
		<div>
			<h1>{name} Page not found</h1>
		</div>
	);
};

export default page;
