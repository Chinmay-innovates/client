import MouseScaleImageGallery from "@/components/mouse-scale-image-gallery";
import MaskCursorEffect from "@/components/mask-cursor-effect";
interface Props {
	params: Promise<{
		name: string;
	}>;
}
const page = async ({ params }: Props) => {
	const { name } = await params;

	if (name === "mouse-scale-image-gallery") {
		return <MouseScaleImageGallery />;
	}
	if (name === "mask-cursor-effect") {
		return <MaskCursorEffect />;
	}

	return (
		<div>
			<h1>{name} Page not found</h1>
		</div>
	);
};

export default page;
