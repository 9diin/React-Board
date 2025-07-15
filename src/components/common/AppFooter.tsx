import { Separator } from "../ui/separator";

function AppFooter() {
    return (
        <footer className="w-full flex items-center justify-center pb-12 bg-[#121212]">
            <div className="w-full max-w-[1328px] p-4 sm:p-6">
                <div className="w-full flex items-center gap-3">
                    <p className="cursor-pointer transition-all duration-300 hover:font-medium">이용약관</p>
                    <Separator orientation="vertical" className="!h-[14px]" />
                    <p className="cursor-pointer transition-all duration-300 hover:font-medium">개인정보처리방침</p>
                    <Separator orientation="vertical" className="!h-[14px]" />
                    <p className="cursor-pointer transition-all duration-300 hover:font-medium">클래스 론칭 문의</p>
                </div>
                <Separator className="my-5" />
                <div className="w-full flex flex-col items-start gap-12 lg:flex-row xl:gap-48">
                    <div className="flex flex-col gap-4">
                        <img src={"src/assets/icons/logo-lg.svg"} alt="img" className="w-20" />
                        <div className="hidden md:flex flex-col gap-1">
                            <div className="flex items-center gap-4">
                                <p>대표이사 : 박성재</p>
                                <Separator orientation="vertical" className="!h-3" />
                                <p>사업자 번호 : 696-48-01248</p>
                                <Separator orientation="vertical" className="!h-3" />
                                <p>통신판매신고번호 : 2025-서울서초-1014</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p>대표번호 : 070-8080-4429</p>
                                <Separator orientation="vertical" className="!h-3" />
                                <p>주소 : 서울특별시 서초구 서초대로 15길 33</p>
                                <Separator orientation="vertical" className="!h-3" />
                                <p>© Mingo Team all rights reserved</p>
                            </div>
                        </div>
                        <div className="flex md:hidden flex-col gap-1">
                            <p>대표이사 : 박성재</p>
                            <p>사업자 번호 : 696-48-01248</p>
                            <p>통신판매신고번호 : 2025-서울서초-1014</p>
                            <Separator className="my-2" />
                            <p>대표번호 : 070-8080-4429</p>
                            <p>주소 : 서울특별시 서초구 서초대로 15길 33</p>
                            <Separator className="my-2" />
                            <p>© Mingo Team all rights reserved</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="h-[38px] text-base font-semibold">고객센터</h4>
                        <div className="flex flex-col items-start gap-1">
                            <p>평일 오전 10시 ~ 오후 6시</p>
                            <p>문의 : mingoteam@naver.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;
