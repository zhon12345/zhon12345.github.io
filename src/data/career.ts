import WebPlusLogo from "@/assets/experience/web-plus.png";
import CleverlyLogo from "@/assets/experience/cleverly.png";
import SuduAILogo from "@/assets/experience/sudu-ai.png";
import type { Experience } from "@/schemas/experience";
import { markdownToHtml } from "@/lib/markdown";

const career: Experience[] = [
	{
		organization: "Web.Plus",
		href: "https://web.plus/",
		logo: WebPlusLogo,
		entries: [
			{
				title: "Software Engineer Intern",
				start: new Date(2026, 0),
				content: [
					"Contributing to an [Abuse Management System](https://web.plus/abuse-management-for-service-providers/) used by the [Singapore Network Information Center (SGNIC)](https://sgnic.sg/) to handle and manage abuse reports.",
				],
			},
		],
		tags: ["Angular.js", "Tailwind CSS", "TypeScript", "MongoDB"],
	},
	{
		organization: "Cleverly SG",
		href: "https://cleverly.sg/",
		logo: CleverlyLogo,
		entries: [
			{
				title: "Backend Developer Intern",
				start: new Date(2025, 6),
				end: new Date(2025, 9),
				content: [
					"Worked on [Ehly](https://heyehly.com/), the company's chatbot solution, integrating third-party services such as Google APIs, Plato, and ezyVet.",
					"Designed a type-safe backend architecture using Python dataclasses, improving reliability and maintainability across modules.",
					"Implemented secure authentication and authorization flows using Google OAuth, JWT, and API tokens.",
				],
			},
		],
		tags: [
			"Python",
			"Django",
			"Django REST Framework",
			"Redis",
			"PostgreSQL",
			"Docker",
			"Google Cloud Platform",
			"Amazon Web Services",
		],
	},
	{
		organization: "A Serious AI",
		href: "https://sudu.ai/",
		logo: SuduAILogo,
		entries: [
			{
				title: "Full-Stack Developer Intern",
				start: new Date(2024, 9),
				end: new Date(2025, 0),
				content: [
					"Worked on [Sudu AI](https://sudu.ai/warehouse.html), an AI-powered ERP platform focused on warehouse and inventory management for SMEs.",
					"Migrated a 210+ route backend from JavaScript to TypeScript with Model-View-Controller (MVC) architecture.",
					"Resolved 97 bugs, reducing backlog by 32% while improving system stability and improving frontend UX.",
					"Seeded 800+ database records using Prisma ORM across Sales & Distribution and Procurement modules.",
				],
			},
		],
		tags: ["Vue.js", "Tailwind CSS", "TypeScript", "Redis", "Prisma ORM", "PostgreSQL"],
	},
];

export const processedCareer = career.map((experience) => ({
	...experience,
	entries: experience.entries.map((entry) => ({
		...entry,
		contentHTML: entry.content?.map((item) => markdownToHtml(item)) ?? [],
	})),
}));
