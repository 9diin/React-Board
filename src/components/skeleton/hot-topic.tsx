import { Skeleton } from "@/components/ui/skeleton";

function SkeletonHotTopicCard() {
    return (
        <div className="min-w-58 w-full flex flex-col gap-3">
            <Skeleton className="w-full h-72 rounded-xl" />
            <div className="flex items-center gap-2">
                <Skeleton className="w-9 min-w-9 h-9 rounded-full" />
                <div className="w-full flex flex-col justify-between gap-2">
                    <Skeleton className="w-40 h-3" />
                    <Skeleton className="w-32 h-[14px]" />
                </div>
            </div>
        </div>
    );
}

export { SkeletonHotTopicCard };
