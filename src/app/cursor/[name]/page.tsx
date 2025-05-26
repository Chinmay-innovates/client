import MouseScaleImageGallery from "@/components/mouse-scale-image-gallery";
import MaskCursorEffect from "@/components/mask-cursor-effect";
import SplitVignette from "@/components/split-vignette";
import StickyCursor from "@/components/sticky-cursor";
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
	if (name === "split-vignette") {
		return <SplitVignette />;
	}
	if (name === "sticky-cursor") {
		return <StickyCursor />;
	}

	return (
		<div>
			<h1>{name} Page not found</h1>
		</div>
	);
};

export default page;
