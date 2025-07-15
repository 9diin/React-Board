import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { TOPIC_CATEGORY } from "@/constants/topic-category.constant";

interface Props {
    category: string | undefined;
    setCategory: (state: string) => void;
}

function CategorySelector({ category, setCategory }: Props) {
    return (
        <div className="hidden lg:min-w-[252px] lg:flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">카테고리</h4>
                <ChevronDown className="mt-1" />
            </div>
            <div className="w-full flex flex-col gap-1">
                {TOPIC_CATEGORY.map((menu) => {
                    return (
                        <Button
                            key={menu.label}
                            className={`w-full h-10 flex justify-start text-[15px] text-muted-foreground bg-transparent hover:bg-[#121212] hover:text-white hover:pl-6 transition-all duration-500 ${
                                category === menu.category && "text-foreground !pl-6 bg-[#121212] hover:bg-[#121212] hover:text-foreground"
                            }`}
                            onClick={() => setCategory(menu.category)}
                        >
                            {menu.icon}
                            {menu.label}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

export { CategorySelector };
