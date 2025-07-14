import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ChartNoAxesColumnIncreasing, Heart } from "lucide-react";

function NewTopicCard() {
    return (
        <Card className="w-full p-4 gap-4 cursor-pointer" onClick={() => {}}>
            <div className="w-full flex gap-4">
                <img src="" alt="" className="min-w-30 w-30 h-30 rounded-lg" />
                <div className="flex flex-col justify-between">
                    {/* 제목 */}
                    <h4 className="scroll-m-20 text-base font-semibold tracking-tight">스나이퍼팩토리 한글과 컴퓨터 AI 아카데미 2기</h4>
                    {/* 본문 */}
                    <p className="text-neutral-500 line-clamp-3">
                        스나이퍼팩토리 한글과 컴퓨터 AI 아카데미 2기 스나이퍼팩토리 한글과 컴퓨터 AI 아카데미 2기 스나이퍼팩토리 한글과 컴퓨터 AI 아카데미 2기 스나이퍼팩토리 한글과 컴퓨터 AI 아카데미
                        2기 스나이퍼팩토리 한글과 컴퓨터 AI 아카데미 2기 스나이퍼팩토리 한글과 컴퓨터 AI 아카데미 2기 스나이퍼팩토리 한글과 컴퓨터 AI 아카데미 2기{" "}
                    </p>
                </div>
            </div>
            <div className="flex items-end justify-between">
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
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <ChartNoAxesColumnIncreasing size={16} />
                        <span>10</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Heart size={16} className="text-red-500" />
                        <span>9</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default NewTopicCard;
