import WebPlusLogo from "@/assets/experience/web-plus.png";
import CleverlyLogo from "@/assets/experience/cleverly.png";
import SuduAILogo from "@/assets/experience/sudu-ai.png";
import type { Experience } from "@/schemas/experience";

export const career: Experience[] = [
	{
		organization: "Web.Plus",
		href: "https://web.plus/",
		logo: WebPlusLogo,
		entries: [
			{
				title: "Software Engineer Intern",
				start: new Date(2026, 0),
				end: new Date(2026, 4),
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
					"Integrated multiple external services (Google Calendar, Sheets, Maps, WhatsApp, Plato, and ezyVet) into the company's chatbot solution.",
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
					"Migrated a 210+ route backend from JavaScript to TypeScript with Model-View-Controller (MVC) architecture.",
					"Resolved 97 bugs, reducing backlog by 32% and improving system stability.",
					"Seeded 800+ database records using Prisma ORM for key business modules.",
					"Improved frontend UX with form validation and advanced date handling.",
				],
			},
		],
		tags: ["Vue.js", "Tailwind CSS", "TypeScript", "Redis", "Prisma ORM", "PostgreSQL"],
	},
];
