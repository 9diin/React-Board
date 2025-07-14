import { useNavigate } from "react-router-dom";

import AppHeader from "@/components/common/AppHeader";
import AppFooter from "@/components/common/AppFooter";
import SideBar from "@/components/home/side-bar";
import HotTopicCard from "@/components/home/card/hot-topic";
import NewTopicCard from "@/components/home/card/new-topic";

import { Flame, PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="page absolute">
            <AppHeader />
            <div className="container">
                <div className="w-full h-full flex items-start p-6 gap-6">
                    {/* 카테고리 UI */}
                    <SideBar />
                    {/* 토픽 콘텐츠 UI */}
                    <div className="w-4/5 flex flex-col gap-12">
                        {/* 핫 토픽 */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <Flame />
                                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">핫 토픽</h4>
                                </div>
                                <p className="text-neutral-500">지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를 얻어보세요.</p>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <HotTopicCard />
                                <HotTopicCard />
                                <HotTopicCard />
                                <HotTopicCard />
                            </div>
                        </div>
                        {/* NEW 토픽 */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <PencilLine />
                                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">NEW 토픽</h4>
                                </div>
                                <p className="text-neutral-500">새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의 토픽을 만들어보세요.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <NewTopicCard />
                                <NewTopicCard />
                                <NewTopicCard />
                                <NewTopicCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter />
            <Button className="fixed bottom-8" onClick={() => navigate("/new-topic")}>
                <PencilLine />
                토픽 작성하기
            </Button>
        </div>
    );
}

export default HomePage;
