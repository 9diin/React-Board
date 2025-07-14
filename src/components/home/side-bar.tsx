import { TOPIC_CATEGORY } from "@/constants/category.constant";
import { ChevronDown, List } from "lucide-react";
import { Button } from "../ui/button";

function TopicSideBar() {
    return (
        <div className="w-1/5 min-w-[252px] flex flex-col gap-[10px]">
            {/* 카테고리 라벨 */}
            <div className="flex items-center gap-2">
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">카테고리</h3>
                <ChevronDown />
            </div>
            {/* 상세 카테고리 - 8개 */}
            <div className="flex flex-col gap-1">
                <Button variant="ghost" className="flex items-center justify-start !pl-6 bg-accent/50">
                    <List />
                    전체
                </Button>
                {TOPIC_CATEGORY.map((category) => {
                    return (
                        <Button key={category.id} variant="ghost" className="flex items-center justify-start text-neutral-500 hover:pl-6 transition-all duration-500">
                            {category.icon}
                            {category.label}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

export default TopicSideBar;
