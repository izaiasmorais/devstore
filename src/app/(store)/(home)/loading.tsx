import Skeleton from "@/components/skeleton";

export default function StoreLoading() {
	return (
		<div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6 h-full">
			<Skeleton className="h-[760px] col-span-6 row-span-6" />
			<Skeleton className="col-span-3 row-span-3" />
			<Skeleton className="col-span-3 row-span-3" />
		</div>
	);
}
