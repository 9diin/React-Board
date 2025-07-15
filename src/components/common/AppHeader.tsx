import { Link } from "react-router";
import { Separator } from "../ui/separator";

function AppHeader() {
    return (
        <header className="fixed top-0 z-20 w-full flex items-center justify-center bg-[#121212]">
            <div className="w-full max-w-[1328px] h-13 flex items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-4">
                    <img src={"src/assets/icons/logo-sm.svg"} alt="img" className="w-9 h-9 cursor-pointer" />
                    <div className="flex items-center gap-4">
                        <Link to={"/classes"}>클래스</Link>
                        <Link to={"/class-materials"}>배움 노트</Link>
                        <Separator orientation="vertical" className="!h-4" />
                        <Link to={"/topics"}>토픽 인사이트</Link>
                        <Separator orientation="vertical" className="!h-4" />
                        <Link to={"/ming-labs"}>밍랩</Link>
                        <Link to={"/stage"}>밍고 스테이지</Link>
                        <Separator orientation="vertical" className="!h-4" />
                        <Link to={"/store"}>밍고 스토어</Link>
                        <Link to={"/mingazines"}>밍거진</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link to={"/sign-in"} className="text-muted-foreground hover:text-white transition-all duration-300">
                        로그인
                    </Link>
                    <Separator orientation="vertical" className="!h-4" />
                    <Link to={"/about-us"} className="text-muted-foreground hover:text-white transition-all duration-300">
                        우리가 하는 일
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
