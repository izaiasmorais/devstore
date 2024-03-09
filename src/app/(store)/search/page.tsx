import Link from "next/link";
import Image from "next/image";

export default function Search() {
	return (
		<div className="flex flex-col gap-4">
			<p className="text-sm">
				Resultados para: <span className="font-semibold">moletom</span>
				<div className="grid grid-cols-3 gap-3">
					<Link
						href={`/product/moletom-never-stop-learning`}
						className="relative group rounded-lg bg-zinc-900 overflow-hidden flex justify-center
				items-start"
					>
						<Image
							className="group-hover:scale-105 transition-transform duration-500"
							src="/moletom-never-stop-learning.png"
							alt=""
							width={480}
							height={480}
							quality={100}
						/>

						<div
							className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full
			border-2 border-zinc-500 bg-black/60 p-1 pl-5"
						>
							<span className="text-sm truncate">
								Moletom Never Stop Learning
							</span>
							<span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
								{Number(129).toLocaleString("pt-BR", {
									style: "currency",
									currency: "BRL",
									minimumFractionDigits: 0,
									maximumFractionDigits: 0,
								})}
							</span>
						</div>
					</Link>
				</div>
			</p>
		</div>
	);
}
