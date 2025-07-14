import { ChartNoAxesCombined, ChevronDown, CodeXml, DraftingCompass, Footprints, Goal, Lightbulb, List, Rocket } from "lucide-react";
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
                <Button variant="ghost" className="flex items-center justify-start !pl-6 bg-accent/30">
                    <List />
                    전체
                </Button>
                <Button variant="ghost" className="flex items-center justify-start text-neutral-500 hover:pl-6 transition-all duration-300">
                    <Lightbulb />
                    인문학
                </Button>
                <Button variant="ghost" className="flex items-center justify-start text-neutral-500 hover:pl-6 transition-all duration-300">
                    <Rocket />
                    스타트업
                </Button>
                <Button variant="ghost" className="flex items-center justify-start text-neutral-500 hover:pl-6 transition-all duration-300">
                    <CodeXml />
                    IT&middot;프로그래밍
                </Button>
                <Button variant="ghost" className="flex items-center justify-start text-neutral-500 hover:pl-6 transition-all duration-300">
                    <Goal />
                    서비스&middot;전략 기획
                </Button>
                <Button variant="ghost" className="flex items-center justify-start text-neutral-500 hover:pl-6 transition-all duration-300">
                    <ChartNoAxesCombined />
                    마케팅
                </Button>
                <Button variant="ghost" className="flex items-center justify-start text-neutral-500 hover:pl-6 transition-all duration-300">
                    <DraftingCompass />
                    디자인&middot;일러스트
                </Button>
                <Button variant="ghost" className="flex items-center justify-start text-neutral-500 hover:pl-6 transition-all duration-300">
                    <Footprints />
                    자기계발
                </Button>
            </div>
        </div>
    );
}

export default TopicSideBar;
