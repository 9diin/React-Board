import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

function AppHeader() {
    return (
        <div className="w-full flex items-center justify-between px-6 py-[6px] bg-[#121212]">
            <div className="flex items-center gap-3">
                {/* 로고 이미지 */}
                <img src="src/assets/logo-sm.svg" alt="" className="w-9 h-9" />
                {/* 메뉴 */}
                <div className="flex items-center gap-4">
                    <Link to={"/classes"}>클래스</Link>
                    <Link to={"/class-materials"}>배움 노트</Link>
                    <Separator orientation="vertical" className="!h-4 text-neutral-500" />
                    <Link to={"/topics"}>토픽 인사이트</Link>
                    <Separator orientation="vertical" className="!h-4 text-neutral-500" />
                    <Link to={"/ming-labs"}>밍랩</Link>
                    <Link to={"/stage"}>밍고 스테이지</Link>
                    <Separator orientation="vertical" className="!h-4 text-neutral-500" />
                    <Link to={"/store"}>밍고 스토어</Link>
                    <Link to={"/mingazines"}>밍거진</Link>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Link to={"/class-materials"}>로그인</Link>
                <Separator orientation="vertical" className="!h-4 text-neutral-500" />
                <Link to={"/topics"} className="text-neutral-500">
                    우리가 하는 일
                </Link>
            </div>
        </div>
    );
}

export default AppHeader;
