import TarUMTLogo from "@/assets/experience/tarumt.png";
import type { Experience } from "@/schemas/experience";

export const education: Experience[] = [
	{
		organization: "Tunku Abdul Rahman University of Management and Technology (TAR UMT)",
		href: "https://www.tarc.edu.my/",
		logo: TarUMTLogo,
		entries: [
			{
				title: "Bachelor of Software Engineering",
				start: new Date(2026, 5),
			},
			{
				title: "Diploma in Information Technology",
				start: new Date(2023, 5),
				end: new Date(2025, 5),
			},
		],
	},
];
