import floating1 from "../public/images/floating_1.jpg";
import floating2 from "../public/images/floating_2.jpg";
import floating3 from "../public/images/floating_3.jpg";
import floating4 from "../public/images/floating_4.jpg";
import floating5 from "../public/images/floating_5.jpg";
import floating6 from "../public/images/floating_6.jpg";
import floating7 from "../public/images/floating_7.jpg";
import floating8 from "../public/images/floating_8.jpg";

import _1 from "../public/images/1.jpg";
import _2 from "../public/images/2.jpg";
import _3 from "../public/images/3.jpg";
import _4 from "../public/images/4.jpg";
import _5 from "../public/images/5.jpg";
import _6 from "../public/images/6.jpg";
import _7 from "../public/images/7.jpg";
import _8 from "../public/images/8.jpg";
import _9 from "../public/images/9.jpg";
import _10 from "../public/images/10.jpg";
import _11 from "../public/images/11.jpg";
import _12 from "../public/images/12.jpg";

const images = [_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12];

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
	{
		id: 9,
		title: "Smooth Parallax Scroll",
		link: "/scroll/smooth-parallax-scroll",
		category: "scroll",
		description: " A smooth parallax scrolling effect with layered backgrounds",
		difficulty: "Intermediate",
		tech: ["Framer Motion", "Lenis Scroll"],
	},
	{
		id: 10,
		title: "Split Vignette",
		link: "/cursor/split-vignette",
		category: "cursor",
		description: "A split vignette effect that follows the cursor",
		difficulty: "Beginner",
		tech: ["Framer Motion", "CSS Clip Path"],
	},
	{
		id: 11,
		title: "SVG Morph",
		link: "/animation/svg-morph",
		category: "animation",
		description: "An SVG morphing animation that transforms shapes smoothly",
		difficulty: "Intermediate",
		tech: ["Framer Motion", "Flubber.js"],
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
	images,
};
