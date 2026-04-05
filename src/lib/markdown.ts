import type { Root, Element } from "hast";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeParse from "rehype-parse";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import BoxArrowUpRight from "@/components/Icons/BoxArrowUpRight.svg?raw";

const schema = {
	...defaultSchema,
	tagNames: [...(defaultSchema.tagNames || []), "svg", "path"],
	attributes: {
		...defaultSchema.attributes,
		a: [...(defaultSchema.attributes?.a || []), "target", "rel"],
		span: [...(defaultSchema.attributes?.span || []), "className"],
		svg: [...(defaultSchema.attributes?.svg || []), "viewBox", "fill", "className"],
		path: [...(defaultSchema.attributes?.path || []), "d"],
	},
};

const svgNode: Element = (() => {
	const parsed = unified().use(rehypeParse, { fragment: true }).parse(BoxArrowUpRight) as Root;
	const svg = parsed.children?.[0] as Element;
	svg.properties = { ...(svg.properties || {}), fill: "currentColor", className: ["inline-block", "w-4"] };
	return svg;
})();

export function markdownToHtml(markdown: string) {
	const file = unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeExternalLinks, {
			target: "_blank",
			rel: ["noopener", "noreferrer"],
			content: [svgNode],
			contentProperties: { className: ["ml-1"] },
		})
		.use(rehypeSanitize, schema)
		.use(rehypeStringify)
		.processSync(markdown);
	return String(file);
}
