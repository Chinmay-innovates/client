import floating1 from "../public/images/floating_1.jpg";
import floating2 from "../public/images/floating_2.jpg";
import floating3 from "../public/images/floating_3.jpg";
import floating4 from "../public/images/floating_4.jpg";
import floating5 from "../public/images/floating_5.jpg";
import floating6 from "../public/images/floating_6.jpg";
import floating7 from "../public/images/floating_7.jpg";
import floating8 from "../public/images/floating_8.jpg";

const PROJECTS_DATA = [
	{
		id: 1,
		title: "Project Gallery Mouse Hover",
		link: "/animation/project-gallery-mouse-hover",
		category: "animation",
		description: "Interactive gallery with smooth mouse hover effects",
		difficulty: "Advanced",
		tech: ["Framer Motion", "GSAP", "CSS Animations"],
	},
	{
		id: 2,
		title: "Infinite Text Move on Scroll",
		link: "/scroll/infinite-text-move-on-scroll",
		category: "scroll",
		description: "Continuous text animation triggered by scroll events",
		difficulty: "Intermediate",
		tech: ["JavaScript", "Intersection Observer"],
	},
	{
		id: 3,
		title: "Smooth Scroll",
		link: "/scroll/smooth-scroll",
		category: "scroll",
		description: "Buttery smooth scrolling experience across all browsers",
		difficulty: "Beginner",
		tech: ["CSS", "JavaScript"],
	},
	{
		id: 4,
		title: "Navigation Menu",
		link: "/menu/navigation-menu",
		category: "menu",
		description: "Modern responsive navigation with micro-interactions",
		difficulty: "Intermediate",
		tech: ["React", "Framer Motion"],
	},
	{
		id: 5,
		title: "Mouse Scale Image Gallery",
		link: "/cursor/mouse-scale-image-gallery",
		category: "cursor",
		description: "Dynamic image scaling based on cursor proximity",
		difficulty: "Advanced",
		tech: ["Request Animation Frame", "Padding bottom"],
	},
	{
		id: 6,
		title: "Curved Menu",
		link: "/menu/curved-menu",
		category: "menu",
		description: "Elegant curved menu with fluid animations",
		difficulty: "Intermediate",
		tech: ["SVG", "Framer Motion"],
	},
	{
		id: 7,
		title: "Floating Image Gallery",
		link: "/animation/floating-image-gallery",
		category: "animation",
		description: "Interactive image gallery with floating effects",
		difficulty: "Beginner",
		tech: ["GSAP", "Request Animation Frame", "LERP"],
	},
	{
		id: 8,
		title: "Mask Cursor Effect",
		link: "/cursor/mask-cursor-effect",
		category: "cursor",
		description:
			"A custom cursor with a mask hover effect revealing text underneath",
		difficulty: "Beginner",
		tech: ["Framer Motion"],
	},
];

export {
	floating1,
	floating2,
	floating3,
	floating4,
	floating5,
	floating6,
	floating7,
	floating8,
	PROJECTS_DATA,
};
