"use client";

import Skeleton from "@/components/skeleton";
import { Suspense } from "react";
import { CurrentSearch } from "./curret-search";

export default function StoreLoading() {
	return (
		<div className="flex flex-col gap-4">
			<Suspense fallback={null}>
				<CurrentSearch />
			</Suspense>

			<div className="grid grid-cols-3 gap-3">
				<Skeleton className="h-[480px]" />
				<Skeleton className="h-[480px]" />
				<Skeleton className="h-[480px]" />
				<Skeleton className="h-[480px]" />
				<Skeleton className="h-[480px]" />
				<Skeleton className="h-[480px]" />
			</div>
		</div>
	);
}
