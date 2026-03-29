import type { SchemaContext } from "astro:content";
import { z } from "astro/zod";

const ExperienceEntry = z.object({
	title: z.string(),
	start: z.date().optional(),
	end: z.date().optional(),
	content: z.array(z.string()).optional(),
});

const Experience = ({ image }: SchemaContext) =>
	z.object({
		organization: z.string(),
		href: z.httpUrl(),
		logo: image().optional(),
		entries: z.array(ExperienceEntry).min(1),
		tags: z.array(z.string()).optional(),
	});

export type Experience = z.infer<ReturnType<typeof Experience>>;
