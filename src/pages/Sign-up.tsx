import AppFooter from "@/components/common/AppFooter";
import AppHeader from "@/components/common/AppHeader";
import SignUpForm from "@/components/sign-up/Form";

function SignUpPage() {
    return (
        <div className="page">
            <AppHeader />
            <div className="container">
                <div className="w-full flex flex-col items-center justify-start p-4 gap-4 sm:p-6 sm:gap-6">
                    <div className="flex flex-col items-center">
                        <h4 className="text-lg font-semibold mb-2">안녕하세요 👋🏻</h4>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center gap-[2px]">
                                <small className="text-base font-medium text-[#f96859]">포트폴리오</small>
                                <small className="text-sm text-muted-foreground">에 방문해주셔서 감사합니다.</small>
                            </div>
                            <p className="text-sm text-muted-foreground">서비스를 이용하려면 로그인을 진행해주세요.</p>
                        </div>
                    </div>
                    <SignUpForm />
                </div>
            </div>
            <AppFooter />
        </div>
    );
}

export default SignUpPage;
