import { ProjectGalleryMouseHover } from "@/components/project-gallery-mouse-hover";
import FloatingImageGallery from "@/components/floating-image-gallery";
import SvgMorph from "@/components/svg-morph";

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
	if (name === "floating-image-gallery") {
		return <FloatingImageGallery />;
	}
	if (name === "svg-morph") {
		return <SvgMorph />;
	}

	return (
		<div>
			<h1>{name} Page not found</h1>
		</div>
	);
};

export default page;
