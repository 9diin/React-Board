import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { MousePointerClick } from "lucide-react";

function HotTopicCard() {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="w-full relative">
                <Skeleton className="w-full h-[288px] rounded-lg" />
                <div className="absolute bottom-4 z-10 w-full flex items-end justify-between px-4">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight line-clamp-3">The Joke Tax The Joke Tax The Joke Tax The Joke Tax The Joke Tax The Joke Tax</h3>
                    <Button size="icon">
                        <MousePointerClick />
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="text-neutral-500 text-xs">IT 및 기술 분야 · 소프트웨어 엔지니어</span>
                    <span>개발자 9Diin</span>
                </div>
            </div>
        </div>
    );
}

export default HotTopicCard;
