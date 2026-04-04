import { unified } from "unified";
import { defaultSchema } from "rehype-sanitize";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

const schema = {
	...defaultSchema,
	attributes: {
		...defaultSchema.attributes,
		a: [...(defaultSchema.attributes?.a || []), "target", "rel"],
	},
};

export function markdownToHtml(markdown: string) {
	const file = unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] })
		.use(rehypeSanitize, schema)
		.use(rehypeStringify)
		.processSync(markdown);
	return String(file);
}
