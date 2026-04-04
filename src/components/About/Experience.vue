<template>
	<section>
		<div class="container pt-0">
			<!-- Tab Buttons -->
			<div
				class="*:text-text-secondary *:hover:text-text mb-8 flex gap-4 *:cursor-pointer *:text-sm *:font-semibold *:tracking-wide *:uppercase *:transition-colors"
			>
				<button
					@click="activeTab = 'career'"
					:class="[activeTab === 'career' && 'border-primary text-primary! border-b-2']"
				>
					Work
				</button>
				<button
					@click="activeTab = 'education'"
					:class="[activeTab === 'education' && 'border-primary text-primary! border-b-2']"
				>
					Education
				</button>
			</div>

			<!-- Tab Content -->
			<div class="space-y-8">
				<div v-for="item in activeTab === 'career' ? career : education" class="flex gap-4 space-y-2">
					<a :href="item.href" target="_blank" rel="noopener noreferrer">
						<div v-if="item.logo" class="aspect-square size-12 rounded-full bg-[#fff] p-1">
							<img
								:src="item.logo.src"
								:alt="item.organization"
								class="h-full w-full object-contain"
								loading="lazy"
								decoding="async"
							/>
						</div>
					</a>

					<div class="w-full">
						<a :href="item.href" target="_blank" rel="noopener noreferrer">
							<h3 class="text-text m-0 text-lg font-semibold">{{ item.organization }}</h3>
						</a>

						<div class="space-y-1">
							<div v-for="entry in item.entries">
								<div
									class="*:text-text-secondary flex flex-col *:text-sm md:flex-row md:items-baseline md:justify-between"
								>
									<p class="m-0 font-medium">{{ entry.title }}</p>
									<span v-if="entry.start" class="whitespace-nowrap">
										{{ formatDate(entry.start) }} – {{ entry.end ? formatDate(entry.end) : "Present" }}
									</span>
								</div>

								<ul v-if="entry.content" class="text-text-secondary list-outside list-disc pt-2 pl-4">
									<li v-for="item in entry.content" class="text-justify text-sm">
										{{ item }}
									</li>
								</ul>
							</div>
						</div>

						<div v-if="activeTab === 'career' && item.tags" class="flex flex-wrap gap-2 pt-2">
							<span v-for="tag in item.tags" class="bg-surface-elevated text-text-secondary rounded px-2 py-1 text-xs">
								{{ tag }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { career } from "@/data/career";
import { education } from "@/data/education";

const activeTab = ref<"career" | "education">("career");

function formatDate(date: Date | string): string {
	if (typeof date === "string") return date;
	return new Intl.DateTimeFormat(undefined, { month: "short", year: "numeric" }).format(date);
}
</script>
