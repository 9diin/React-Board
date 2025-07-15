import { useState } from "react";
import AppFooter from "./components/common/AppFooter";
import AppHeader from "./components/common/AppHeader";

import { CategorySelector } from "./components/common/category-selector";
import { SkeletonHotTopicCard } from "./components/skeleton/hot-topic";
import { SkeletonBasicTopicCard } from "./components/skeleton/new-topic";
import { Button } from "./components/ui/button";
import { PencilLine } from "lucide-react";
import { useNavigate } from "react-router";

function App() {
    const [category, setCategory] = useState<string>("");
    const navigate = useNavigate();

    return (
        <div className="page">
            <AppHeader />
            <div className="container">
                <div className="w-full h-full flex items-start gap-6 p-6 sm:p-6">
                    <CategorySelector category={category} setCategory={setCategory} />
                    <section className="w-full lg:w-[calc(100%-276px)] flex flex-col gap-12">
                        {/* 핫 토픽 섹션 */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1">
                                    <img src={"src/assets//gifs/fire.gif"} alt="img" className="w-7 h-7" />
                                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">핫 토픽</h4>
                                </div>
                                <p className="md:text-base text-muted-foreground">지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를 얻어보세요.</p>
                            </div>

                            <div className="flex items-center gap-4 sm:gap-6 overflow-auto">
                                <SkeletonHotTopicCard />
                                <SkeletonHotTopicCard />
                                <SkeletonHotTopicCard />
                                <SkeletonHotTopicCard />
                            </div>
                        </div>
                        {/* 신규 토픽 섹션 */}
                        <section className="w-full flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <img src={"src/assets/gifs/writing-hand.gif"} alt="img" className="w-7 h-7" />
                                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">NEW 토픽</h4>
                                </div>
                                <p className="md:text-base text-muted-foreground">새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의 토픽을 만들어보세요.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <SkeletonBasicTopicCard />
                                <SkeletonBasicTopicCard />
                                <SkeletonBasicTopicCard />
                                <SkeletonBasicTopicCard />
                            </div>
                        </section>
                    </section>
                </div>
            </div>
            <AppFooter />
            <Button variant={"destructive"} className="fixed bottom-8 !py-5 !px-6 text-white rounded-full opacity-80" onClick={() => navigate("/topics/new-topic")}>
                <PencilLine />
                토픽 작성하기
            </Button>
        </div>
    );
}

export default App;
