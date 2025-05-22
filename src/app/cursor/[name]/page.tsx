import MouseScaleImageGallery from "@/components/mouse-scale-image-gallery";
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

	return (
		<div>
			<h1>{name} Page not found</h1>
		</div>
	);
};

export default page;
